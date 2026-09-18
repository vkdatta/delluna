export const name="sprint-fill";
export const id="dl_5530ecd84de542eb80f4";
export const url=new URL("../icons/sprint-fill.svg?v=31bad3eb1427f882127b9d4cedb66559cbe0cf4d575c11a7b83034238fa7268f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
