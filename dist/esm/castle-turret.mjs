export const name="castle-turret";
export const id="dl_e1837c5a4ce043b28f69";
export const url=new URL("../icons/castle-turret.svg?v=6b92a14d3947eaf040f7eeb5be39c164112db6eafd0ab885bca4302dfdc04216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
