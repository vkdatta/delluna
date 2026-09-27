export const name="swap_driving_apps_wheel";
export const id="dl_1e9f70007ec573283eee";
export const url=new URL("../icons/swap_driving_apps_wheel.svg?v=17fd90aed43983c7d55559a65e3252c65be5d0d6ab7f55d6bb77ba72d8584c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
