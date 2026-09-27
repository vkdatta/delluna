export const name="signal_cellular_alt_1_bar-fill";
export const id="dl_58c77454be38f887a6dc";
export const url=new URL("../icons/signal_cellular_alt_1_bar-fill.svg?v=90593651e2db284171740f5682f90daa72bbfe2741110be5b0321fbca2e94b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
