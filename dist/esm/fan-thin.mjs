export const name="fan-thin";
export const id="dl_7d8c23a8e8684c9db54f";
export const url=new URL("../icons/fan-thin.svg?v=6b70b4b96fd8b8d22c903c7581f7484cdf30053e68450845bd6e37d72e7a9ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
