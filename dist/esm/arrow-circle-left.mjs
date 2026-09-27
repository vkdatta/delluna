export const name="arrow-circle-left";
export const id="dl_0fcbce7b88294f26adc3";
export const url=new URL("../icons/arrow-circle-left.svg?v=d15fe21fb644c68e8788c6b08673145a78c5896d1b4ff289bc7174429f01d733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
