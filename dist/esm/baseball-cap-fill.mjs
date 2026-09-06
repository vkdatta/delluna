export const name="baseball-cap-fill";
export const id="dl_c72c07b05218456db8bb";
export const url=new URL("../icons/baseball-cap-fill.svg?v=b136ab547632492544fcacbf55d348add04b132efe850f0c78dbad9b245ba7b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
