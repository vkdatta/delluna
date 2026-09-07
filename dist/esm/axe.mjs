export const name="axe";
export const id="dl_a1dcc54c19904fa8a86e";
export const url=new URL("../icons/axe.svg?v=84243f95f3f25c1fdc4d1e358a77f429c53709fd9d11bc8d18b9f16680efbd50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
