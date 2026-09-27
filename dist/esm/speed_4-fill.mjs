export const name="speed_4-fill";
export const id="dl_0d0401c07073087d456e";
export const url=new URL("../icons/speed_4-fill.svg?v=a407d1f3b4230ba6fdd66dc7c23c4f263e25faa31f91c90ed9c4a7abd6984bbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
