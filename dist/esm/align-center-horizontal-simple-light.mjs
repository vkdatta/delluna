export const name="align-center-horizontal-simple-light";
export const id="dl_5469cb4150fa4c128d76";
export const url=new URL("../icons/align-center-horizontal-simple-light.svg?v=f6c23fb0e99fe37db73edff9ce1516d16a0cbb3fca71f5bd69e91d3fd91aa6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
