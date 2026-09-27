export const name="caret-left-duotone";
export const id="dl_e74bf2f7f6574e11a6d0";
export const url=new URL("../icons/caret-left-duotone.svg?v=2de41ab21d6c2302b28713c372b1f6b01c4311d9c6784a76b828ebf649b850bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
