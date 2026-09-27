export const name="paperclip-fill";
export const id="dl_11a9833df35e4ed59c62";
export const url=new URL("../icons/paperclip-fill.svg?v=996e153a58b4098e52d15388a0ad4fb1e97c71fcad851c740841e35f5263cf29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
