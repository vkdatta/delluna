export const name="square-m";
export const id="dl_355018d9bc06426fb063";
export const url=new URL("../icons/square-m.svg?v=83d6a9f8caff2f7007822a69e43961fb0088a3943509e04b7e498336c4cf7276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
