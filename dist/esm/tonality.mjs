export const name="tonality";
export const id="dl_92117e24027cf3893973";
export const url=new URL("../icons/tonality.svg?v=f2d39e99dfaa3128b93e92ac28835eeb6d17cbd9d94545f6f1fe10f7174cfaec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
