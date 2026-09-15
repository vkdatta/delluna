export const name="blinds_closed-fill";
export const id="dl_71e5b3bcb9244d1ca0a1";
export const url=new URL("../icons/B/blinds_closed-fill.svg?v=91bc675c22f6f9dd1548dfa68fe5726e505d80639b3f690b234ea20145a42a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
