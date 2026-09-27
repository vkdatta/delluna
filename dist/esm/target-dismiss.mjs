export const name="target-dismiss";
export const id="dl_807728803095c47bbe6a";
export const url=new URL("../icons/target-dismiss.svg?v=e7da98bab7691eabaf53602b478d8732ccd2308906d7dde8ec2c308a8f18678d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
