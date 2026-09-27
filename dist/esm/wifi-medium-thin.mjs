export const name="wifi-medium-thin";
export const id="dl_b09926d60ef8317c0c7b";
export const url=new URL("../icons/wifi-medium-thin.svg?v=8f703279363980c591f25de17fd25d625fa4192185cd825e1a1c84b31b174dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
