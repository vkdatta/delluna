export const name="timer-bold";
export const id="dl_f0bf78efbb1536170835";
export const url=new URL("../icons/timer-bold.svg?v=a3fd407bcc7c09ccca7b99618c8cb0ec6d1b57efa8f81ed6ac9ba06f9611285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
