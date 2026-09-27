export const name="timer-reset";
export const id="dl_8034a58b3095446dad68";
export const url=new URL("../icons/timer-reset.svg?v=8eb9de81cfbd373ba0b6d952a75737d7146140a754967ec0a3cea19d12ba6ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
