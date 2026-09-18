export const name="cameraswitch";
export const id="dl_92d486fd3d054ab69e0d";
export const url=new URL("../icons/cameraswitch.svg?v=a84b005451697b977d23f8d04f4effea026513e81289c293acb6e6f8339fd27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
