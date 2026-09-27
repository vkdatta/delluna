export const name="wifi-x-thin";
export const id="dl_3d5bdca723ad9726a099";
export const url=new URL("../icons/wifi-x-thin.svg?v=e6a6486d8217ac9df65908190cac2849fc35221af2370ee9448fd06b3192a6e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
