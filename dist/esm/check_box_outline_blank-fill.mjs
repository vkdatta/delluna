export const name="check_box_outline_blank-fill";
export const id="dl_d31d7d48d9f382d17a2c";
export const url=new URL("../icons/check_box_outline_blank-fill.svg?v=b08d4b7800b89fea62b85f19fb7e8c3de394b466923479dd3cba89d015ae983d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
