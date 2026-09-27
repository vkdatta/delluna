export const name="hand-duotone";
export const id="dl_7caadbb0af0846838910";
export const url=new URL("../icons/hand-duotone.svg?v=d25b43135204b9fd9bae1015e575c90c7f9e2023bf9640ae52a2ff985c6bb5de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
