export const name="lucid_2-file-cog";
export const id="dl_2ba0a588b3064d679bce";
export const url=new URL("../icons/lucid_2-file-cog.svg?v=39cfd144d4b3b55c230b0987ac73a5f5371e7c4eeed6ff8825632cddd7878a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
