export const name="co2";
export const id="dl_6edd7a339ac404cb685b";
export const url=new URL("../icons/co2.svg?v=c37f549f7a55788d41210c4f93940a04e6103b94b7bbd2c829f08acb4bd3a4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
