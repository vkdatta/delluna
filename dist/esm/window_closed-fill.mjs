export const name="window_closed-fill";
export const id="dl_ff7dd50765ab0617dfa8";
export const url=new URL("../icons/window_closed-fill.svg?v=b4610e90c8a6aa2dd3bb667c586266c0a3ce9ec125b8c85a1090ff303316750e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
