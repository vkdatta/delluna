export const name="fitness_tracker";
export const id="dl_b01586122f1348598322";
export const url=new URL("../icons/fitness_tracker.svg?v=e1cc7a3903e65760b0bcd557dc60c287978c848e5477bc32898b04ab281bbb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
