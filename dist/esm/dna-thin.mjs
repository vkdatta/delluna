export const name="dna-thin";
export const id="dl_258a8c75d2a145be8fd9";
export const url=new URL("../icons/dna-thin.svg?v=0a20c1ad5a78c5ff4dfec231eea8607754ea04ad7240e92e54a15be48e47b272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
