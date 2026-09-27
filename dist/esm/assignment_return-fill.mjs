export const name="assignment_return-fill";
export const id="dl_8ae43e8672807d7cf363";
export const url=new URL("../icons/assignment_return-fill.svg?v=db897c2c12e0fc2284043eddd0e95b32c16aee8aec7ed44cac380e381820e2a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
