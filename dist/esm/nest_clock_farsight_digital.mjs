export const name="nest_clock_farsight_digital";
export const id="dl_095bcf6e207734bb735c";
export const url=new URL("../icons/nest_clock_farsight_digital.svg?v=99e499553c322df050785af432e2786822fa77ed2578e3919c31a000e94330c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
