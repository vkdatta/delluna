export const name="arrow-fat-lines-left-bold";
export const id="dl_e9245f772a624877bcad";
export const url=new URL("../icons/arrow-fat-lines-left-bold.svg?v=1fe21bf2188dfe8808a5f7599be22541ccfc2fb5825181ee936858b0162ba8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
