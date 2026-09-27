export const name="ecg";
export const id="dl_9abf6b763584758d2ce6";
export const url=new URL("../icons/ecg.svg?v=2534f328e1bf76d3c7648cb6c68efcba6ae6ccfe0f270907e04dcc141a12da5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
