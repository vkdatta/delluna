export const name="bubbles-fill";
export const id="dl_21d8717eaf2d43ab981c";
export const url=new URL("../icons/bubbles-fill.svg?v=270de66d11836034c6f3e1aa0c3cae7edb621766462fae9f9fc2eaedc422b902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
