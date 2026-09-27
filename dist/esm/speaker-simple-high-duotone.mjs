export const name="speaker-simple-high-duotone";
export const id="dl_094bdf3141d819909deb";
export const url=new URL("../icons/speaker-simple-high-duotone.svg?v=7303f56021f338416e58054bf94aa67adc20fb51535ff7811efdc4770a57d3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
