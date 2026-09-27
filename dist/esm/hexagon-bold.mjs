export const name="hexagon-bold";
export const id="dl_d8502fe37b664974a28e";
export const url=new URL("../icons/hexagon-bold.svg?v=2659968bf3af51fe8104e894346739e2006e76e3f6487a9632e49f02e3968513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
