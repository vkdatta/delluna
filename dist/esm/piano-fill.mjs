export const name="piano-fill";
export const id="dl_ea661329cc24e7158810";
export const url=new URL("../icons/piano-fill.svg?v=40ba4441caaafaa8ba56916697fd37e661b08c7fe59f1de770ec1e6bd40de1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
