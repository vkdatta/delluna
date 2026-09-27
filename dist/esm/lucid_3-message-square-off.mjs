export const name="lucid_3-message-square-off";
export const id="dl_f2c4ad56890948729606";
export const url=new URL("../icons/lucid_3-message-square-off.svg?v=4b23bf96b7ddbd31e8fceef35fa6a43d143e6c0224fe8f2e0904829de4d884a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
