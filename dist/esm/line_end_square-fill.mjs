export const name="line_end_square-fill";
export const id="dl_280abd6113b4eea84fbb";
export const url=new URL("../icons/line_end_square-fill.svg?v=74dc2fb66bb8d1090cb138c73f20be614aedae0f18a7916495cab54977c71634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
