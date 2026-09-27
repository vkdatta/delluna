export const name="angle-thin";
export const id="dl_0caf94238b8e4be78e02";
export const url=new URL("../icons/angle-thin.svg?v=24f4f5bbdaac2aedf03ab4870fd230470e3a90d28c7a733d497dcbaba208a361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
