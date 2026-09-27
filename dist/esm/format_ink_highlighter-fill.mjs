export const name="format_ink_highlighter-fill";
export const id="dl_2febefb4e10ff9097e2f";
export const url=new URL("../icons/format_ink_highlighter-fill.svg?v=a4f50edda1ee7c2032b759ee8868f71fac79617b687b5b9470872005e9020ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
