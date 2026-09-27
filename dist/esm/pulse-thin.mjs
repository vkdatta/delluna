export const name="pulse-thin";
export const id="dl_3b323cd694de43bf8efe";
export const url=new URL("../icons/pulse-thin.svg?v=d89ff6b6e6be10405736f1ea13eb94fca6ad5418025b0317f9dd63ae0cc4600d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
