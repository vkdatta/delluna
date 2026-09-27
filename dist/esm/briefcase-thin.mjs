export const name="briefcase-thin";
export const id="dl_97751cf85f7f43089388";
export const url=new URL("../icons/briefcase-thin.svg?v=733411cb12e67d52cdb91bc28e3e636af544b714ee04101aa90449375b962e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
