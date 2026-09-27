export const name="person_heart";
export const id="dl_44f524639f1b87b13206";
export const url=new URL("../icons/person_heart.svg?v=eb10b274eeb2e2a1340f7427beb64996f82ef07e87eb3b0dee15edfbbac59150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
