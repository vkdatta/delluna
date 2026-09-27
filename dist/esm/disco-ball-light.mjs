export const name="disco-ball-light";
export const id="dl_c7dba6f76f014df4977f";
export const url=new URL("../icons/disco-ball-light.svg?v=f7ec144c282e59c13d3dd6ad37eca4245e9498efd91620f3295a534ce9f9f749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
