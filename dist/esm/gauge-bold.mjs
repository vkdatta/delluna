export const name="gauge-bold";
export const id="dl_e6d8b2f0b4c040ae8fe6";
export const url=new URL("../icons/gauge-bold.svg?v=4d0fb82793b3f2359cd317361a408515207320692f4eb17c89b5ba2f7513c3bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
