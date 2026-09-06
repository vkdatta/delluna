export const name="beanie";
export const id="dl_129615a960c64e2b95aa";
export const url=new URL("../icons/beanie.svg?v=6674c227ce689c349a3ae43bc81dcca50d0ca7a242814c1f78d9f9be4396b61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
