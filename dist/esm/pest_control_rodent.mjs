export const name="pest_control_rodent";
export const id="dl_9fc77e64220907422614";
export const url=new URL("../icons/pest_control_rodent.svg?v=1186fcfd14c83669603ae0440585a051c611c5c739dd4d596d7446c9e99d14f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
