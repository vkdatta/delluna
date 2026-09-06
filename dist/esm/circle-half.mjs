export const name="circle-half";
export const id="dl_027b58c3803441e384ef";
export const url=new URL("../icons/circle-half.svg?v=4e5376acc240190bf951be566c4649b69936c928f679eba6793412295bb90736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
