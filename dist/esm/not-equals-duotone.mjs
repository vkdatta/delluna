export const name="not-equals-duotone";
export const id="dl_c64b88fa96154c60ba7a";
export const url=new URL("../icons/not-equals-duotone.svg?v=4714a03bad864e99adcb20985344be892a373e285a26be21f300f9d1149134e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
