export const name="currency-ngn-bold";
export const id="dl_be4430c3a60546b39ab1";
export const url=new URL("../icons/currency-ngn-bold.svg?v=413e26055a36d7b79261f028fd04a21a6708953b8e933c5081b0a96036027d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
