export const name="touch_double_2";
export const id="dl_f4535e3910b14095a21a";
export const url=new URL("../icons/touch_double_2.svg?v=713f4080b852c1dacd14af1e000cf855491aad832371290b2ac643a348503cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
