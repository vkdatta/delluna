export const name="device-mobile-camera-light";
export const id="dl_118f3a6ad8a2494f8529";
export const url=new URL("../icons/device-mobile-camera-light.svg?v=b21215e91ea62c2cf4ced0644653581407f1a2a21233753491c6b1b392a1a39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
