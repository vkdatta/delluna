export const name="handbag-simple-fill";
export const id="dl_9386946fa35043a7a24e";
export const url=new URL("../icons/handbag-simple-fill.svg?v=9d22d5e2b158177f15463745ee3f1b24b99e1d253ddfbac9dee14f6d240f1ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
