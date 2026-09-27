export const name="emergency_heat-fill";
export const id="dl_0f8146e80f8bd420b179";
export const url=new URL("../icons/emergency_heat-fill.svg?v=d43c71f988da994b8471279eca4584cc06af4255adbc57a666f7142f9f7bcc15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
