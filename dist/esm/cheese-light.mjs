export const name="cheese-light";
export const id="dl_1670a4735dd94cd0915c";
export const url=new URL("../icons/cheese-light.svg?v=bfefb37dff2097756f376b2d0c96f9fbc3279eadfe52a00134de5986de5745c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
