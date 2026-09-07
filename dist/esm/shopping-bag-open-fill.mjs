export const name="shopping-bag-open-fill";
export const id="dl_551d717b4f2d4a94b2fa";
export const url=new URL("../icons/S/shopping-bag-open-fill.svg?v=7ce17f88e4a60ba245c7d631abfff9218b945d847b50a1d94d76f14067045b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
