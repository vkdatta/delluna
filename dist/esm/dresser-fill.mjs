export const name="dresser-fill";
export const id="dl_b17730e34cb5479ba06f";
export const url=new URL("../icons/dresser-fill.svg?v=8aaa1897617755e5634e93feaa090e97d243c46e81512f38469e6319cc050ad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
