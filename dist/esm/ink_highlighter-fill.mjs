export const name="ink_highlighter-fill";
export const id="dl_197f0f64cefa581fe912";
export const url=new URL("../icons/ink_highlighter-fill.svg?v=7150e50810ef3c3ce95816ff945efc3953a8b0ff9be49f2e455b4b1eee94ec6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
