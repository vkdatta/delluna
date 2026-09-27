export const name="supervisor_account-fill";
export const id="dl_5a2dd163f5fed7cd6ff9";
export const url=new URL("../icons/supervisor_account-fill.svg?v=05e7dfe0187ff09192eed16f39a8975c7819a74551ab0ea09242cec4ed284789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
