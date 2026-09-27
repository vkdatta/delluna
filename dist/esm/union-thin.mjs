export const name="union-thin";
export const id="dl_d57fb37e7b7693abebb3";
export const url=new URL("../icons/union-thin.svg?v=f2f219e4c263ef89fa65aeae87382fd8a667cad958570d4be55e9f82d0ed88e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
