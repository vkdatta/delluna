export const name="user-plus-bold";
export const id="dl_891a3ccf1365482ea77f";
export const url=new URL("../icons/U/user-plus-bold.svg?v=9a26eedd8f06b1ad21bc20fafe592e6a3de98af814f1c4aa6551a819ef0b4638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
