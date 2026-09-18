export const name="hvac";
export const id="dl_f3a9df4740c746fb9ea6";
export const url=new URL("../icons/hvac.svg?v=9242e668c7989d4dd179085235fcd63f92622e5e04600d81405e72f8d2591349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
