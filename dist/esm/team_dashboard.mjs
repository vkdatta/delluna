export const name="team_dashboard";
export const id="dl_4bc6c299db096d281ea7";
export const url=new URL("../icons/team_dashboard.svg?v=ed1f9cde6433b5a62c1afcbaa0c68323511f2cf73f1e141a4819038727951f32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
