export const name="touch_double_2";
export const id="dl_d872f156ee2578aed62a";
export const url=new URL("../icons/touch_double_2.svg?v=daa0e088a948248d63bdf2eff15a4b2268490584ec3d665ba60216450e9d4901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
