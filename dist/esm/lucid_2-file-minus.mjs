export const name="lucid_2-file-minus";
export const id="dl_bf57b22802db4e97a043";
export const url=new URL("../icons/lucid_2-file-minus.svg?v=c3acd5866303317d27a7c669d4cb296342fc31bd96f4fa43dda8ca3c8b71b0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
