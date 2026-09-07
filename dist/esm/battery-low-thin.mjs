export const name="battery-low-thin";
export const id="dl_f70caa34b1a1400d9e19";
export const url=new URL("../icons/battery-low-thin.svg?v=1fd4d8e39d6f9808521e5015525090d584e0f251847c7d64a92242c8c3bfddfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
