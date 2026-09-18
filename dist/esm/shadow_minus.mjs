export const name="shadow_minus";
export const id="dl_b42aeb36315a48b9a7dc";
export const url=new URL("../icons/shadow_minus.svg?v=f6f661ca6ce92d80f7b828e7b6aa3f99b456c1ccbf907708b8b21aa1c8df3827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
