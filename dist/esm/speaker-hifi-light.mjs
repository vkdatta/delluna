export const name="speaker-hifi-light";
export const id="dl_2b3cde6f117ed7617258";
export const url=new URL("../icons/speaker-hifi-light.svg?v=3da778fee9f9548ace0eaf9f9729be077757368cd075ea8e85f2915055d2642b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
