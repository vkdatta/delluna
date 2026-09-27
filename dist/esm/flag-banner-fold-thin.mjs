export const name="flag-banner-fold-thin";
export const id="dl_2db1409eceba4378a922";
export const url=new URL("../icons/flag-banner-fold-thin.svg?v=9c55d4b8fca3e2081d4a437d90f02ac076c3d8bc7c2b20dc924f50b03871830b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
