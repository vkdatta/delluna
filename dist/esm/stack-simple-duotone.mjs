export const name="stack-simple-duotone";
export const id="dl_583b948151164b058e3c";
export const url=new URL("../icons/S/stack-simple-duotone.svg?v=bcc0924ae8548b14e6613aa07d10b0579d055ab95fab3454b08a0763a991efb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
