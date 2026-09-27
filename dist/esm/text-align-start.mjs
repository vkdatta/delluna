export const name="text-align-start";
export const id="dl_5d08e4f03cac41878e93";
export const url=new URL("../icons/text-align-start.svg?v=2a25d50d9a8033ea7a86146d25031b4c635f7b4734faed66b863ab5cb712e151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
