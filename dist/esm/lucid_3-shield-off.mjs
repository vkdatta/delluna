export const name="lucid_3-shield-off";
export const id="dl_0f3581031fc44538b002";
export const url=new URL("../icons/lucid_3-shield-off.svg?v=55ccee7f11ed338b8984823d89976f9b281238b457666e5c2b9fb806ecac2db5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
