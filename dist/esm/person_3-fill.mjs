export const name="person_3-fill";
export const id="dl_c0c46c5533b2934f7434";
export const url=new URL("../icons/person_3-fill.svg?v=5b431017cbf9c2098ed624375044187cb2bb91abcc4330013245efd43a025e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
