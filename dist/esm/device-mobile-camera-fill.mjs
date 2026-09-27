export const name="device-mobile-camera-fill";
export const id="dl_92c610f89a2941a8a826";
export const url=new URL("../icons/device-mobile-camera-fill.svg?v=509d7e28c6062f18e9ad37817839073fefac8c00fb412ab69a86b1fb6f71d835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
