export const name="arrow_back_2";
export const id="dl_10659dba2b39433b833e";
export const url=new URL("../icons/arrow_back_2.svg?v=84d1f584d66df071ef2bf166347e53ab19b45305ab54a1565fe8528984e6c7d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
