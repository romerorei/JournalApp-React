
export const fileUpload = async( file ) => {
  if ( !file ) throw new Error('No tenemos ninguna archivo a subir');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dg1ksxdjd/image/upload'

  const formdata = new FormData();
  formdata.append("upload_preset", "react-journal");
  formdata.append("file", file);

  try {

   const resp = await fetch( cloudUrl, {
    method: 'POST',
    body: formdata,
    redirect: 'follow' })

    console.log(resp);
    if ( !resp.ok ) throw new Error('No se pudp subir la imagen:')

    const cloudResp = await resp.json();
    console.log({ cloudResp })

    return cloudResp.secure_url;

  } catch (error) {
    console.log(error);
    throw new Error( error.message );

  }


}
