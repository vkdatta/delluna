export const name="switch";
export const id="dl_d95c8da4966387aa597c";
export const url=new URL("../icons/switch.svg?v=2010ac0ade6d33fc6ed55d60000810c00ab3e5af4ade3621efc9bd5c8bf36d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
