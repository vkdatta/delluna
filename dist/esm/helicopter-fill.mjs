export const name="helicopter-fill";
export const id="dl_985cca636af420eb96e3";
export const url=new URL("../icons/helicopter-fill.svg?v=79f99862e7c4169d85fb30ec6a8982af975a3bc26b294bd38f853e7dade400a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
