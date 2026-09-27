export const name="lightstrip";
export const id="dl_b72f9c0892f8b26b6572";
export const url=new URL("../icons/lightstrip.svg?v=31ac51b29bc39c963d5242411335605bcc1f7a389cf262f83682098cfd8bf37f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
