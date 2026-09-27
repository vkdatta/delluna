export const name="file-arrow-up-thin";
export const id="dl_a163d4921c07456e9274";
export const url=new URL("../icons/file-arrow-up-thin.svg?v=c9678039bce6129db418f11d3f9fed21328c4d01c93cbf14029501ecd037aafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
