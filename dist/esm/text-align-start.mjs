export const name="text-align-start";
export const id="dl_5d08e4f03cac41878e93";
export const url=new URL("../icons/text-align-start.svg?v=cbce332d40a3e13b4794c919defea70c44d42ee2f76f1c9e7fa2bf31645a9c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
