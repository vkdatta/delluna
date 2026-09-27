export const name="orange-slice-bold";
export const id="dl_8297225d063e42ddaf04";
export const url=new URL("../icons/orange-slice-bold.svg?v=6ad966cd0993caafb04be7158ffa630ed9f5da317765d6f8e01c21c55a102843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
