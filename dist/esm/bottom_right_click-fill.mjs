export const name="bottom_right_click-fill";
export const id="dl_d9257cbbc5c7d7456323";
export const url=new URL("../icons/bottom_right_click-fill.svg?v=b5273bb581a1d743fc6ddc2eac34e076c269feceeeb14276eaab61ced8845cca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
