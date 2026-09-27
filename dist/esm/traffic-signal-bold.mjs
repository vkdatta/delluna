export const name="traffic-signal-bold";
export const id="dl_be23e555eec693ce003f";
export const url=new URL("../icons/traffic-signal-bold.svg?v=9241b51a62ebf7a3a9800bcbf5eff27085d13547a9033c6ca0387943f8204190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
