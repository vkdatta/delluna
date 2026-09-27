export const name="chat_info-fill";
export const id="dl_2ca8dad026681be0386a";
export const url=new URL("../icons/chat_info-fill.svg?v=79192e238baadb60a4d2658caa48b96d7900e076adf9625e723af3f1c39aadc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
