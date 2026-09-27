export const name="counter_8";
export const id="dl_0457a28cf15fe10c43dd";
export const url=new URL("../icons/counter_8.svg?v=5de43f1f56fe0d29d7648090240624624ee47f237126a2f33020494a58572f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
