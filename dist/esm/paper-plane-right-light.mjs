export const name="paper-plane-right-light";
export const id="dl_59497547903b49d29e9e";
export const url=new URL("../icons/paper-plane-right-light.svg?v=9b9a2086f838b0863eb4aa80ee294883139617231d064087528613e2c06ed18f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
