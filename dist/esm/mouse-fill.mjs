export const name="mouse-fill";
export const id="dl_680016c1cfbb9003228b";
export const url=new URL("../icons/mouse-fill.svg?v=e2167cd6eaa4c9234cf11c33ee65a422a748b9fd192c9eca3396c9e5b9aadb43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
