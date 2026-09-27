export const name="no_sim-fill";
export const id="dl_8ba3cc14159836acabcf";
export const url=new URL("../icons/no_sim-fill.svg?v=8fe575f91e261e0283572d7f0722286d165b55fc898e29a9d51173620c2df878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
