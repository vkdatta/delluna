export const name="emergency_share_off-fill";
export const id="dl_561addd0073d6e9988ca";
export const url=new URL("../icons/emergency_share_off-fill.svg?v=c87285aeba4271f684ee8754e408797266aa4670601eb0d7ef2cf0daa8efd742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
