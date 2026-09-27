export const name="lucid_3-message-circle";
export const id="dl_690a9ea7380c4e7d8614";
export const url=new URL("../icons/lucid_3-message-circle.svg?v=01778fba811be36024e1f909177b5d73f30aa08c523d3afc0d110baa1cccc298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
