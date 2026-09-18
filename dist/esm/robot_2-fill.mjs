export const name="robot_2-fill";
export const id="dl_aa2bdc9c33b342ac9355";
export const url=new URL("../icons/R/robot_2-fill.svg?v=e72f5f4785fe346e77ac8f80a99c7566e2874fec0c93e8e50e906cfde741f9ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
