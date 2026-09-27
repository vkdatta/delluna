export const name="replace_image";
export const id="dl_56396cbb7dcc50805334";
export const url=new URL("../icons/replace_image.svg?v=8146faeab66425b826ecc52b3f0f498439f7027cc9c4247735c42efebea01b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
