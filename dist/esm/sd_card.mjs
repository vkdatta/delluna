export const name="sd_card";
export const id="dl_a7eec984ac6baf5bb097";
export const url=new URL("../icons/sd_card.svg?v=64ec5748c7df3ee4ee7f959f4f104338e26e35192fa3c0f62501776d6015daf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
