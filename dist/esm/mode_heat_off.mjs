export const name="mode_heat_off";
export const id="dl_bbe179b609f5ae0b7b3c";
export const url=new URL("../icons/mode_heat_off.svg?v=c67873b2ddae94e0e24bf72a322ae9a55d1134ee05c772b95c76e21f25a0d1c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
