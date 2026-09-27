export const name="arrow-line-down-duotone";
export const id="dl_9e363e3742924de680a2";
export const url=new URL("../icons/arrow-line-down-duotone.svg?v=51a0c75d5b91f83a1d04c3640a425d8c0c5d7140b2dbaf314b9e11c857fa9cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
