export const name="steppers-fill";
export const id="dl_8b878c8bcb3e350d0c07";
export const url=new URL("../icons/steppers-fill.svg?v=6391f82944694b6b2ff16685d30e97e2dc916d88b5cb6726c6005f3a44f5e11e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
