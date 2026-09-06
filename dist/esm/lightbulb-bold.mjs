export const name="lightbulb-bold";
export const id="dl_bc70b35466964fbf89d3";
export const url=new URL("../icons/lightbulb-bold.svg?v=921852d3ed05269f919a78eaa2cabc76d6655f6c34c0eeb191c5e5863ced4d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
