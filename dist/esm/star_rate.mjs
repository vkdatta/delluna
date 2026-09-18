export const name="star_rate";
export const id="dl_6780adc8eacc482eaefc";
export const url=new URL("../icons/star_rate.svg?v=752cee95fa7597e786726420214d9998d3ee0d055dfdb08bf2e08dbf7f807163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
