export const name="tools_level";
export const id="dl_879c3ff939224ec881e4";
export const url=new URL("../icons/T/tools_level.svg?v=071d54b4b96b85908c7cad94132355fc8b347b8f02d8e4cc5a8db2c433f4f2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
