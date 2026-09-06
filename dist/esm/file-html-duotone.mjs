export const name="file-html-duotone";
export const id="dl_770cfcae627045fd8094";
export const url=new URL("../icons/file-html-duotone.svg?v=a995d7170c1e6e9743065a284beb2ab0001f8c8841f56140fe24d35774873782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
