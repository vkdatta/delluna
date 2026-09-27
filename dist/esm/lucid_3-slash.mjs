export const name="lucid_3-slash";
export const id="dl_84c8a399d0224beb92e9";
export const url=new URL("../icons/lucid_3-slash.svg?v=c248bf0ad6d3ffe8a04e1e8129181e42f06596883e3ba2aca9baeea19921cfce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
