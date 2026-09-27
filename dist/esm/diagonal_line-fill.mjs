export const name="diagonal_line-fill";
export const id="dl_5c6ad6ccb32115269f14";
export const url=new URL("../icons/diagonal_line-fill.svg?v=0b07f08ab79531ffcf7baa07e5fb8b778f26c9211cb218ee54a4e66b20dfc785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
