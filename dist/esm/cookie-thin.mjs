export const name="cookie-thin";
export const id="dl_62716257eec04daba452";
export const url=new URL("../icons/cookie-thin.svg?v=c57638b62e29b0703823eeb40a86010d3a86bd1c9490e2d2296757fceac0bf9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
