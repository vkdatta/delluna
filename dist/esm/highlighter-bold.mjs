export const name="highlighter-bold";
export const id="dl_c2d6458ea00a4ff58b46";
export const url=new URL("../icons/highlighter-bold.svg?v=93bfd584affacbf44a7dd4581edb54c0d772ae07838729dca75685b182bd6c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
