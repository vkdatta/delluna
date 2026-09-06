export const name="number-eight-bold";
export const id="dl_607b97efe0d8499daa5b";
export const url=new URL("../icons/number-eight-bold.svg?v=a2788b7d6cc285c3695297f6264a6173289db371a51f4f24c00fde26db2d45c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
