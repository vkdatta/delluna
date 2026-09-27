export const name="user-check-thin";
export const id="dl_497d5e13246fad80776f";
export const url=new URL("../icons/user-check-thin.svg?v=43aa00df8a67b7547eb2b03ad1b0d4cf8ffd8e79157b4cea9306dbca3da8bc82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
