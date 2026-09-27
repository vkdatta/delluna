export const name="hexagon-bold";
export const id="dl_d8502fe37b664974a28e";
export const url=new URL("../icons/hexagon-bold.svg?v=f1dfe71e103233839afc0a52d046e7443e8a6f34ee347006d7bdc1758c68a90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
