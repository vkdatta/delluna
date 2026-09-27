export const name="trash-simple-bold";
export const id="dl_e8ff39efff8875d25b5e";
export const url=new URL("../icons/trash-simple-bold.svg?v=ec8a802fa4860915b8d286500e8b5f7d04f99eb75d1475e02f3bc8fa8678fa85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
