export const name="airplane-taxiing-light";
export const id="dl_bff0c2f502fd49ab8b76";
export const url=new URL("../icons/airplane-taxiing-light.svg?v=ea56a8cece531a8f173b5c8d9a14104a59328f681a60ea0eec8204b68a90574b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
