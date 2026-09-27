export const name="speaker-high-fill";
export const id="dl_5afe24ba18f7ff9184c3";
export const url=new URL("../icons/speaker-high-fill.svg?v=d5b9a1308ff37f41bc3ce7599f4027d392c6a2a59f97688bc53327b7dabd14a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
