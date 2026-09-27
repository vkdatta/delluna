export const name="strategy";
export const id="dl_1ef07e9c98321d288ea6";
export const url=new URL("../icons/strategy.svg?v=e3332e7cef1107885845fec610fe5a4c4445344693fcb8f3220dae919b959675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
