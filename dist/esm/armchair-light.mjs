export const name="armchair-light";
export const id="dl_3c8d12dd7df6459984fc";
export const url=new URL("../icons/armchair-light.svg?v=be6cc74aab9027e70b839242e8475989392c8f4cd0b5fcf5faa7174089d93820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
