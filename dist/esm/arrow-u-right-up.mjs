export const name="arrow-u-right-up";
export const id="dl_db7a19aa14904a31842e";
export const url=new URL("../icons/arrow-u-right-up.svg?v=9f4a833d3b5a10a00b51c6423d88eaf3b925644afe1b9d4c73621637aaa4072a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
