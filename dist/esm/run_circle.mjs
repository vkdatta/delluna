export const name="run_circle";
export const id="dl_26236cec466b138f24a1";
export const url=new URL("../icons/run_circle.svg?v=6be8ba28b9eaa486efd283d91085eb8652c636c82de109ed6b7ea8d974b8767a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
