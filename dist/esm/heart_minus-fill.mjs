export const name="heart_minus-fill";
export const id="dl_b87e27f09de147bd8b5a";
export const url=new URL("../icons/heart_minus-fill.svg?v=2e33f3473ee727f2d45927b643b3b1153bc48fd346bb4ac9d576f570e1b980b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
