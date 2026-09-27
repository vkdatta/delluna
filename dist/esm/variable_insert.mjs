export const name="variable_insert";
export const id="dl_f451c6845c00e6c4cee4";
export const url=new URL("../icons/variable_insert.svg?v=8d82f30ac168de921a173cd1ddfa780fc8a71a88f41d3e2731180218710d6ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
