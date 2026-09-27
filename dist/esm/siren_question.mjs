export const name="siren_question";
export const id="dl_84aabb8e15b2c9c05c12";
export const url=new URL("../icons/siren_question.svg?v=cad1ba8306bef0bcbb3a15a2e72b53ce0f6263a30126985d330b8dc35b023a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
