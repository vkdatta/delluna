export const name="relax";
export const id="dl_6d2313b69684b20c2ebd";
export const url=new URL("../icons/relax.svg?v=c3f117bb6b5a1f3c36dfa930c9ea90332ab2b4018a322e98d26bf149034c6cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
