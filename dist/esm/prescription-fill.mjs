export const name="prescription-fill";
export const id="dl_87359fa667de4eb69e95";
export const url=new URL("../icons/prescription-fill.svg?v=4a9dff9e6d05d99b1dd1c2448d2520b00fdd0210b6d5af35c285cbb548716c1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
