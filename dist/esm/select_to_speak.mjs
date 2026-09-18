export const name="select_to_speak";
export const id="dl_a68c6ed89661461a93c2";
export const url=new URL("../icons/S/select_to_speak.svg?v=be14f963d696a04a7041428e5eab1304fd52a696a4a9f53560d0514f54a40273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
