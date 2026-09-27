export const name="dev-to-logo-light";
export const id="dl_f018336d920144779794";
export const url=new URL("../icons/dev-to-logo-light.svg?v=b7b0825f66e4d0b74a98d98bc8bbd94ea6650dbb2abd288085f70e056d067956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
