export const name="funnel-x";
export const id="dl_c4b09531350b4d3b87ef";
export const url=new URL("../icons/funnel-x.svg?v=e996a38142e0bbf24567abc3322d0bca4bcc4fce98db7558509f0bc8ca425966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
