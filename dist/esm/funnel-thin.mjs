export const name="funnel-thin";
export const id="dl_75b9f6dc658f42d68dcd";
export const url=new URL("../icons/funnel-thin.svg?v=e60f5d2a5cfc9fbedb8455f167302184832e6cb9bf3a6fbb6252388bfd9a8334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
