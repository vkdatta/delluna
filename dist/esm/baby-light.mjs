export const name="baby-light";
export const id="dl_40903c83259845789909";
export const url=new URL("../icons/baby-light.svg?v=af0ce295e17daeb66fb15d0820ec2d016a180d2814b5348f7fca95ecea48eeee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
