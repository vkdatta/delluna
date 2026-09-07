export const name="waves-fill";
export const id="dl_9c5bab65207b4e6794f7";
export const url=new URL("../icons/W/waves-fill.svg?v=8d89488693654e8c4966f427c00c91e19f1e28fa1bc09a51f1506a287b7e142a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
