export const name="timer_5";
export const id="dl_aa5bd807858c4b6d871b";
export const url=new URL("../icons/timer_5.svg?v=931dc60ec892e6dc8a3262f801a3e76ac0d897d930e452b4a763442dc6ff6cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
