export const name="airplane_ticket-fill";
export const id="dl_64858a8623e897a5e330";
export const url=new URL("../icons/airplane_ticket-fill.svg?v=a17418667fbb1f1cdacd7830d58f0fe39dc51741626557d290576bbb5bd6e7ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
