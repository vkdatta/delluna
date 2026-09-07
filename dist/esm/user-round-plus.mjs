export const name="user-round-plus";
export const id="dl_97c231521be44b3d80b9";
export const url=new URL("../icons/user-round-plus.svg?v=64f7cb36dfea051dafe7cca58de359df3ce2019a143b8cb26098ca405859e1a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
