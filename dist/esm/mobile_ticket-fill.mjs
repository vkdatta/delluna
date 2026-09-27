export const name="mobile_ticket-fill";
export const id="dl_5f9a819ae7434306b399";
export const url=new URL("../icons/mobile_ticket-fill.svg?v=19fe992ec32250c2767bae3efdc4983bb67e04fd64aa0497603695ff5be68150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
