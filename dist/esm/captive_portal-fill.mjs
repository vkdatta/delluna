export const name="captive_portal-fill";
export const id="dl_78ef3e434f2889111c89";
export const url=new URL("../icons/captive_portal-fill.svg?v=f1866dfee50ae7dda74afd927cb53a299c1867c41c8c111a862c408ea7f72229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
