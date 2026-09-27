export const name="traffic-signal-duotone";
export const id="dl_4909ea01267fb1d6f5a7";
export const url=new URL("../icons/traffic-signal-duotone.svg?v=44d598672b0425f749a9757ec8074571840311e4d5c095f47c06a6e9fb819220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
