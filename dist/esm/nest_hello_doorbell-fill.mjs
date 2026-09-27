export const name="nest_hello_doorbell-fill";
export const id="dl_e10e36ceeeeb4a20cb24";
export const url=new URL("../icons/nest_hello_doorbell-fill.svg?v=f75022f805f1b672f66b6c85e5aa87c164bec92ac721bf44a99bcfd09f1c73aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
