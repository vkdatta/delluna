export const name="speed_0_75";
export const id="dl_e3660ffd35d0ca5f79fd";
export const url=new URL("../icons/speed_0_75.svg?v=ecfb7e0ab5b4e85e0497890784f3f8a5db68824d55197eeeafd0cfa92ee0a45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
