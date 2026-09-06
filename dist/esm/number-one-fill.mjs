export const name="number-one-fill";
export const id="dl_08e506b8cd0042b087a0";
export const url=new URL("../icons/number-one-fill.svg?v=3dabd79459adde12e04c44a0ad80fda3db54bc31efffbf5a44a62df1f74d8320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
