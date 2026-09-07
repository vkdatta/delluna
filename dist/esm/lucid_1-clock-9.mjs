export const name="lucid_1-clock-9";
export const id="dl_d3d346a551a240e7b3af";
export const url=new URL("../icons/lucid_1-clock-9.svg?v=d5553cf11bcd9315c854dca371a982b01009906a697f0bd529f1df05692bb98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
