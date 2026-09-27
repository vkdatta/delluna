export const name="funnel-simple-x-fill";
export const id="dl_27426ff05cdb4f7e9921";
export const url=new URL("../icons/funnel-simple-x-fill.svg?v=5e6ffba57ab33edbb6f103072d9007a30bc50e1e49be9bac95fe8876c1ffc671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
