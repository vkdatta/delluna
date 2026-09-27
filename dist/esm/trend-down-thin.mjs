export const name="trend-down-thin";
export const id="dl_65de724b22dd53df1440";
export const url=new URL("../icons/trend-down-thin.svg?v=8158b15ec7eca140faa19ec6f31b887733c593ff888025998e6406797fa7b65f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
