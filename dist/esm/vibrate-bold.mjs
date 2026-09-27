export const name="vibrate-bold";
export const id="dl_44cb18e717b822751315";
export const url=new URL("../icons/vibrate-bold.svg?v=031e5a08960faf6177bfc18a6f84e84c69a641e194f12b88e258563d15dd0184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
