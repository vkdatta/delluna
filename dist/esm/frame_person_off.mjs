export const name="frame_person_off";
export const id="dl_3abad7acd658c8affdd4";
export const url=new URL("../icons/frame_person_off.svg?v=87bf05467fee18c1f8b5e1da6773038b482714185ad8baad556a05145b79e146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
