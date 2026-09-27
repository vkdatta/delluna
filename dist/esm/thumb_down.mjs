export const name="thumb_down";
export const id="dl_74129fc8318df2c0a9ee";
export const url=new URL("../icons/thumb_down.svg?v=3170fe7cf50f8b6ecbd659d183961528aa3aab0215afec3267ff918a2c8a45a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
