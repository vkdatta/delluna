export const name="factory-thin";
export const id="dl_9226995c1ed84ba2af03";
export const url=new URL("../icons/factory-thin.svg?v=b377c164e1c302a0c5087b2891a68a5bb51f9a8382b0dbbb07054490405ef4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
