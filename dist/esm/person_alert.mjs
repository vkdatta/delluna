export const name="person_alert";
export const id="dl_828f695888b05540f1e4";
export const url=new URL("../icons/person_alert.svg?v=756a8b3e81dfd03f184b5086392a7b884baa0ec9d8c271bd3cffe391414fd3d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
