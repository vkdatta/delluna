export const name="broken_image";
export const id="dl_6b3ef808b36e1889f403";
export const url=new URL("../icons/broken_image.svg?v=e202785adb29563db76de88cda78eb49a418d4192730a9db066c1f2b4233db1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
