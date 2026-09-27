export const name="timelapse";
export const id="dl_5e03719f77d86b577384";
export const url=new URL("../icons/timelapse.svg?v=62038f90d8e822f202decea183d6499c31d9ee57b81a0ce44abe3dc1f651019a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
