export const name="envelope-simple-open-light";
export const id="dl_b627f30f801f4a4a8849";
export const url=new URL("../icons/envelope-simple-open-light.svg?v=78bfb10a219e2f786345bab4686754354b8a2ad6a565aaf0698b59582c5d5891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
