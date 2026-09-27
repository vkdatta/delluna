export const name="bulldozer-bold";
export const id="dl_ae3b5d027d73497da149";
export const url=new URL("../icons/bulldozer-bold.svg?v=6655bed09e735e8d809a246c7a87677e5160c299e75b007ac3fc243f74509089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
