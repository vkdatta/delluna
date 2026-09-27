export const name="flag-pennant-duotone";
export const id="dl_df93ca87da124f87a1eb";
export const url=new URL("../icons/flag-pennant-duotone.svg?v=e9540b9025c0184cdb3afb4eb9244bbfc7243c24c2e88608f79e7a66a935c561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
