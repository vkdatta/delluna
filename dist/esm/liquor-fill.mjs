export const name="liquor-fill";
export const id="dl_36b660c1dde1ab818b26";
export const url=new URL("../icons/liquor-fill.svg?v=f9ddc3faf53cd0e2171f6aecd9e1f930d76bcff1f9c2659813fb679cd78956da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
