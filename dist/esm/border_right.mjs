export const name="border_right";
export const id="dl_4583e2df9c0e8a8e41cd";
export const url=new URL("../icons/border_right.svg?v=dfdbde803d818a2469e986cc814dff26bf968923cf06d013ec85949b16f59782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
