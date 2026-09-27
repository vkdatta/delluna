export const name="square-dashed-text";
export const id="dl_582e9bdb113c40fea097";
export const url=new URL("../icons/square-dashed-text.svg?v=f0bfbac63890d8f039128dc338386fca99bb4e59d93115173fd8fe6d08cb1d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
