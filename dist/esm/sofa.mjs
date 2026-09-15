export const name="sofa";
export const id="dl_380071c708fa44cfab74";
export const url=new URL("../icons/C/sofa.svg?v=c20152965f51b38483ff60b8307421771b9ff587123bbf55596c50455ba7f557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
