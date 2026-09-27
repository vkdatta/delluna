export const name="shape_line-fill";
export const id="dl_7f9fc9e3c59bbd039ff0";
export const url=new URL("../icons/shape_line-fill.svg?v=59867df1af5fddd769430f8802d30ccad7bb5ef25e252c789f6f0ff6b105e8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
