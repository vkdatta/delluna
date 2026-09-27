export const name="eye-closed-thin";
export const id="dl_f1d9fd7230524df189bf";
export const url=new URL("../icons/eye-closed-thin.svg?v=e02e570ef142efb28ffb4002b086e5a8dc276ad174f4588583f2c239f369eaff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
