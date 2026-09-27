export const name="asclepius-bold";
export const id="dl_37fe06f8f01844c7bf83";
export const url=new URL("../icons/asclepius-bold.svg?v=371e2be3de28dc4a79d22102ad20f4cd00a9d3f9d29d4a7f80bf41e5348d18a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
