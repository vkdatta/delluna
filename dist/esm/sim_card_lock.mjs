export const name="sim_card_lock";
export const id="dl_a1ba7d23680f54bfae63";
export const url=new URL("../icons/sim_card_lock.svg?v=5b3bd438d3c1f3ec33abbee245c1cea3820db652982c65d04a1e7235979529c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
