export const name="home_improvement_and_tools-fill";
export const id="dl_2480523571ecc9a10f8c";
export const url=new URL("../icons/home_improvement_and_tools-fill.svg?v=d8882f8890e65a9c0749861251d653210c033cc488ca61682a2373b21ae55dd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
