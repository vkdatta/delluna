export const name="assignment_ind-fill";
export const id="dl_0f54fbb6e98948e78ab5";
export const url=new URL("../icons/assignment_ind-fill.svg?v=9ac2488d4aa6cecc2c3447abf7a1bdf39666808df225a5ec2dfc4afc4fa22689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
