export const name="number-circle-seven-fill";
export const id="dl_344dc294ce334f8cafa0";
export const url=new URL("../icons/number-circle-seven-fill.svg?v=cbfeb488dd374cd52d513cce02158936daafce9f3258ad2ff70e6ee66b3b02c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
