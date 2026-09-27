export const name="chart-line-thin";
export const id="dl_149f8ad867e14c08aab5";
export const url=new URL("../icons/chart-line-thin.svg?v=30f25f0d5005b197a621e2422869ef69fcd33f36274810bd56d06f084cb2dd96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
