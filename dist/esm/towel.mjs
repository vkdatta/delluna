export const name="towel";
export const id="dl_1dffd018ac2b7f84be45";
export const url=new URL("../icons/towel.svg?v=de9d2ab7d26b763d2a2b2b4d904f137e1a73dc9d567056500fead915fd9dd82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
