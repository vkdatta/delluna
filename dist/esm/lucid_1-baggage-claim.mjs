export const name="lucid_1-baggage-claim";
export const id="dl_25f4ae3598cb4ee2948d";
export const url=new URL("../icons/lucid_1-baggage-claim.svg?v=31b78cd7d413728c12bcae90d90b32fb9bb6a7fd8b9b08d6d5632427fff80783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
