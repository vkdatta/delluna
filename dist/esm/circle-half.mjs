export const name="circle-half";
export const id="dl_027b58c3803441e384ef";
export const url=new URL("../icons/circle-half.svg?v=91d04bc49800c71e2eb5af329dcdeb63fa727aae08ad8c4403af17b42906215c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
