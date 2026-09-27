export const name="traffic-signal";
export const id="dl_f424e23bfb0d6267894a";
export const url=new URL("../icons/traffic-signal.svg?v=114fab9bb3febba3d46ebb6e4abde6b0c6ebb0dd42c69874581b377fa51e70c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
