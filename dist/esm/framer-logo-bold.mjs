export const name="framer-logo-bold";
export const id="dl_abdf2baea44f40d29ff7";
export const url=new URL("../icons/framer-logo-bold.svg?v=150a0e6d2b2c464c51b92cec73980784cda161e99ff4daafab5581db44effcc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
