export const name="wall_lamp";
export const id="dl_b7640e701b193b46efe5";
export const url=new URL("../icons/wall_lamp.svg?v=3e9d72cb40b6e09929ffb3fac3235939606f72f6e0c2759540dc21a3435b81c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
