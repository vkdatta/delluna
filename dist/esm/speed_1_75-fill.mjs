export const name="speed_1_75-fill";
export const id="dl_5901f5ea273f7e0a6cae";
export const url=new URL("../icons/speed_1_75-fill.svg?v=0172b5d00fc17871a3750af622f1b0d2031545656b316623a3a24e3de5028cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
