export const name="safety_divider-fill";
export const id="dl_936fd1dfd7df808c01f6";
export const url=new URL("../icons/safety_divider-fill.svg?v=c19e5908800962b7ea9f51477dc306a795ccaf0a8802733a86f13cb4f61da9a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
