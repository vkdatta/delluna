export const name="eraser-fill";
export const id="dl_84f69ac581254167b2c5";
export const url=new URL("../icons/eraser-fill.svg?v=28a03d2c867f4693597df5744387a2a1f29ffd152808687604d0956342d479ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
