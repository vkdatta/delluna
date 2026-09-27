export const name="vibrate-light";
export const id="dl_3c26e3dc5417aa5f6d7d";
export const url=new URL("../icons/vibrate-light.svg?v=2286ab0ebd62f87d64c701af5b4d3ecfb24cab43417f7c7f87c7bc21a0e26d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
