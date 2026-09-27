export const name="globe-simple-x-bold";
export const id="dl_9750187ea59d4da793fb";
export const url=new URL("../icons/globe-simple-x-bold.svg?v=b2cb4edd8aaf24990e79ed4d182a548de5341aa9cd4d30d08f8007bf477d43c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
