export const name="lucid_2-gallery-horizontal";
export const id="dl_4b92a09bf02a471980de";
export const url=new URL("../icons/lucid_2-gallery-horizontal.svg?v=a12a921505a722afee8072bae5e467cabb7fe2577b73803e6cb858a0c20e879b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
