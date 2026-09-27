export const name="tools_power_drill";
export const id="dl_5500bc5cc14986174881";
export const url=new URL("../icons/tools_power_drill.svg?v=60f2b6006455b64fdb2b2576f409eb17c7322825ab10bc7cc9001eacf714199b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
