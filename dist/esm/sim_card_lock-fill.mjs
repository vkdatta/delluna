export const name="sim_card_lock-fill";
export const id="dl_a7e80ac05bf1b2fc6f5e";
export const url=new URL("../icons/sim_card_lock-fill.svg?v=01de43bf87e1b210bc85bd8bd68abde12512739fc523a77282b667621e9e8748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
