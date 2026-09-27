export const name="arrow-square-up-left-bold";
export const id="dl_df6eb8b49fc5456ca39c";
export const url=new URL("../icons/arrow-square-up-left-bold.svg?v=7e7bd8dc81b33cfb8f57669f91e2be8a819a57d5233e5ae0e7dc736eaf3b1f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
