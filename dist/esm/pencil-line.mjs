export const name="pencil-line";
export const id="dl_d2e146e7bbc349f09e1e";
export const url=new URL("../icons/pencil-line.svg?v=914bac92e953485308d041e682357a6f835bdff3090696ef1be35a9c62d7ff4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
