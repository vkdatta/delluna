export const name="hand-grabbing-bold";
export const id="dl_d4efea4c3da24982acbd";
export const url=new URL("../icons/hand-grabbing-bold.svg?v=1ee9e0b2f969f12515898d933080528d7246222c3907cb6fba3532ee906747f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
