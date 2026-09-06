export const name="plus-square";
export const id="dl_a6c7206f61bf42d08a2f";
export const url=new URL("../icons/plus-square.svg?v=b3381873fa4d4e74e53b7a86d92448e935a47059279a0990db51c03139f36439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
