export const name="checklist";
export const id="dl_6fb57b0793a6dd6235dd";
export const url=new URL("../icons/checklist.svg?v=3e11ab0b3ce3531b51765040a9442250259c9269c62d7421c1c8f7863bdf0766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
