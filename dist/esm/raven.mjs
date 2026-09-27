export const name="raven";
export const id="dl_1284078c12843845bd9a";
export const url=new URL("../icons/raven.svg?v=191fdce3679b638705169e9d75f921eb30c70fe3169c55403eed537d10c03683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
