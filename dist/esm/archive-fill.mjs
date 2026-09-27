export const name="archive-fill";
export const id="dl_9fb8e48b72ff42a79d10";
export const url=new URL("../icons/archive-fill.svg?v=7ae9ec6d29786c5bb4c9857d79ff2840aef655b58523f89a01326102b710757e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
