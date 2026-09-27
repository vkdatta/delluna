export const name="shield-star-fill";
export const id="dl_5942b13143356f3615ff";
export const url=new URL("../icons/shield-star-fill.svg?v=f969ff75c66e19ec3c247e41afa172462207c80b978a277e74fa76d612412207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
