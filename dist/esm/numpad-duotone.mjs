export const name="numpad-duotone";
export const id="dl_60f9c8fd5cb2429a8f0d";
export const url=new URL("../icons/numpad-duotone.svg?v=668d660a8c2b3280a2a48923cd2f1a033d1cab980c07d939c0a8d1169cb46816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
