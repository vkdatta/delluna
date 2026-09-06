export const name="dice-one-fill";
export const id="dl_2f62ae1fb67849df9dc8";
export const url=new URL("../icons/dice-one-fill.svg?v=d28fc9bf3b3a69589c7dca9505a68a8386f200c5e617c5b4befe5e7222872891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
