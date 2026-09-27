export const name="person-simple-swim";
export const id="dl_5380690f1645483183f4";
export const url=new URL("../icons/person-simple-swim.svg?v=ef629c6cc49c041d4016cf6e3dd0f471285d28853ed357f8a58564e4eae2ed47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
