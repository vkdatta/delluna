export const name="tab_duplicate";
export const id="dl_887b29ea29324fe71d8d";
export const url=new URL("../icons/tab_duplicate.svg?v=bb96683d01ab0b740e1306af37d3970af32311a7597a7b29514b9e4d0f7fe93c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
