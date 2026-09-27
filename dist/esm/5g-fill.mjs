export const name="5g-fill";
export const id="dl_c14755b8926fc27511f5";
export const url=new URL("../icons/5g-fill.svg?v=fd591fae8945f4d92d6f42c69c9b45fcf5067de9f0adf0c60942da8a70367983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
