export const name="bubble_chart-fill";
export const id="dl_33ff821c6a92aa926a28";
export const url=new URL("../icons/bubble_chart-fill.svg?v=8bf55cfad40d6afe82a13d027b7f16a66227a98b15ac31fe61fc7401a36c6abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
