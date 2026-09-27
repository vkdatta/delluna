export const name="lowercase";
export const id="dl_26321b83f73cced823cb";
export const url=new URL("../icons/lowercase.svg?v=c5d99e8c2cdbfe0465dfa6bf504c1efced91eca7d46e43b3db6b4ebc49e35c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
