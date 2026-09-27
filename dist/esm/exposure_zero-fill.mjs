export const name="exposure_zero-fill";
export const id="dl_2e28609a934807d86922";
export const url=new URL("../icons/exposure_zero-fill.svg?v=ed3a0c65a0d2ea7eee97edef4f7c639238d8fbfba1f3c1a4125d6933121d7d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
