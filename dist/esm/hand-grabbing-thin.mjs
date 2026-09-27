export const name="hand-grabbing-thin";
export const id="dl_9a6fb2fc9cf941a1ae93";
export const url=new URL("../icons/hand-grabbing-thin.svg?v=ade650d523539dda1364f8614ae58066303ad94c23e59a02927b2efb46fe7e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
