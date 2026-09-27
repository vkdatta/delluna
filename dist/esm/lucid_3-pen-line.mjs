export const name="lucid_3-pen-line";
export const id="dl_35624e25db8c4b0d8561";
export const url=new URL("../icons/lucid_3-pen-line.svg?v=1563a4284fd43b24985a5b11c292dd4861c4a3a0e1ea865341aa08f8e9d4a694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
