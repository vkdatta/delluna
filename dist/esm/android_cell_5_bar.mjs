export const name="android_cell_5_bar";
export const id="dl_34845604a1f04440a225";
export const url=new URL("../icons/android_cell_5_bar.svg?v=1ac6ed8b754d2a71a9cd7aa346c08208cdf0ff04f4556f4243e1ec5758dd02d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
