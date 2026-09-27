export const name="stethoscope_check-fill";
export const id="dl_87b40ee2a4cbfbc5b5cd";
export const url=new URL("../icons/stethoscope_check-fill.svg?v=8c0b921a6b7834670fc33ecedfbafecd14f5ad7d37b56bcb1063910c34f6a525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
