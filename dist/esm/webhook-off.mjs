export const name="webhook-off";
export const id="dl_96d076f3f5684acc8647";
export const url=new URL("../icons/webhook-off.svg?v=d89ae3fc7b4b04362134dfc9016471ccfb278ca5f8c4d932f866fc3031957c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
