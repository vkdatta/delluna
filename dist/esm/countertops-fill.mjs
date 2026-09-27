export const name="countertops-fill";
export const id="dl_94cbfb66a8af50fc3290";
export const url=new URL("../icons/countertops-fill.svg?v=acba76882321a574d73d0f9b6f795efe5897cc62232d8d8c1219fcdf5de61a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
