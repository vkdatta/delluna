export const name="chalkboard-teacher-fill";
export const id="dl_e70b9767cf7d499eac9e";
export const url=new URL("../icons/chalkboard-teacher-fill.svg?v=44571e0b0bb574a17efac1123167a4da6e467ea97a597df55423fc395d3babd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
