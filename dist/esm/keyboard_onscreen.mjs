export const name="keyboard_onscreen";
export const id="dl_1b33bbdbf9c2e4b16d3a";
export const url=new URL("../icons/keyboard_onscreen.svg?v=6e4f1320fff1f86b7cab0001d2030f8db9db52578f46c9e01caea2992cea9450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
