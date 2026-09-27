export const name="quotes-light";
export const id="dl_e8c1ec4ebf2946259493";
export const url=new URL("../icons/quotes-light.svg?v=817c8b771a93ead43fdd7636bc13892d56a3b8a95666e1ed8c133281efcfbbbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
