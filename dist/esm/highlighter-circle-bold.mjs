export const name="highlighter-circle-bold";
export const id="dl_1577a9ca98cf4d1cbd07";
export const url=new URL("../icons/highlighter-circle-bold.svg?v=df648b917cd3188426b34df85c5b7eb226a418dfa92fc6da5b54d3506da2987f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
