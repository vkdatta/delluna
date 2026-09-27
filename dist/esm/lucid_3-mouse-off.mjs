export const name="lucid_3-mouse-off";
export const id="dl_a0312b1121764f62a67e";
export const url=new URL("../icons/lucid_3-mouse-off.svg?v=ed038371d93ae7e7c777af723675b78f57c7631772e6dc41224e375164a57ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
