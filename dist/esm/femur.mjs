export const name="femur";
export const id="dl_469c09d1e78d23d2e8b4";
export const url=new URL("../icons/femur.svg?v=898c58a460cb8946a049568746a2a6af69cdf6b77317f187db9b432d568dbbd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
