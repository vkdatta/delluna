export const name="axe";
export const id="dl_a1dcc54c19904fa8a86e";
export const url=new URL("../icons/axe.svg?v=93abc671a615981831156bb6a804208c5e24b0d7b54780caed85ab82ab2cf055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
