export const name="splitscreen_bottom-fill";
export const id="dl_92ba3abb404dae0405ce";
export const url=new URL("../icons/splitscreen_bottom-fill.svg?v=6b79ed1d0b0a7a2099c2c1bfdafbf94b7846afd2b2c0043e1cadb94f5a2a8b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
