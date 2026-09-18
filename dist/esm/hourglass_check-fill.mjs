export const name="hourglass_check-fill";
export const id="dl_79b58d8506974644b4d4";
export const url=new URL("../icons/hourglass_check-fill.svg?v=253a2b259c6cc158724f95ad0e4d07d23509990bb785b4cc224565e00a4bcc9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
