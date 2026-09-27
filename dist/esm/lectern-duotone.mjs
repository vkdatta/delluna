export const name="lectern-duotone";
export const id="dl_d38e95756e144056a865";
export const url=new URL("../icons/lectern-duotone.svg?v=c706de6912c413e32b98f47420088836d25049304c06068d13ca54d9d26b2086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
