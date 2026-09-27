export const name="lucid_3-message-square-off";
export const id="dl_f2c4ad56890948729606";
export const url=new URL("../icons/lucid_3-message-square-off.svg?v=ab18c49f346295fc7b4a41e50a7ec0c70ca30954672f2a8705724af3e4b81714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
