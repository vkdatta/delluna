export const name="person_heart";
export const id="dl_79c04e9bc19445668b68";
export const url=new URL("../icons/person_heart.svg?v=f6df0ca4cd9990fa68a3f23699550c0036b1978022dadff64bb849a46e176886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
