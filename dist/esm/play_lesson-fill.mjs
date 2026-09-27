export const name="play_lesson-fill";
export const id="dl_6176b85aaa0f4f31fa70";
export const url=new URL("../icons/play_lesson-fill.svg?v=654b6bb86d7c82501e7c95e97637bbad3804721770ff313f94ebbe91fa2a0535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
