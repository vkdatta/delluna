export const name="superset-proper-of-bold";
export const id="dl_a7e72e9466eb8de0c7a4";
export const url=new URL("../icons/superset-proper-of-bold.svg?v=b64f62fd9d3aa6a6dceb9c8412ee8e392eb5290a8ffccd76db6c4deda5745d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
