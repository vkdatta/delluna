export const name="ticket-check";
export const id="dl_55f47d20a74f4cc191b5";
export const url=new URL("../icons/ticket-check.svg?v=35ce786549af33f560a6f1fe866a6dd8890de06ef4a257fd8c61d4c58d9fa568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
