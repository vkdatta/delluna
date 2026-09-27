export const name="flowchart";
export const id="dl_8c85c4c285c9ef19f9e2";
export const url=new URL("../icons/flowchart.svg?v=9f8b89b20beccf4014691f2eb37b0a6ed7471303c0ef7b5ef9cd10e61d8c9490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
