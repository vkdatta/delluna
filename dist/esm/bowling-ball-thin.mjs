export const name="bowling-ball-thin";
export const id="dl_841b60a78e904b778280";
export const url=new URL("../icons/bowling-ball-thin.svg?v=66101a618938e3b87474205bccc2ab6883e7e2f73b2ebbc68c7c905975d7c7b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
