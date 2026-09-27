export const name="code-block-bold";
export const id="dl_e56f6f8d07ab47df890b";
export const url=new URL("../icons/code-block-bold.svg?v=6ecc7c09674f5df5ee463054c5c3725d2f90c36cefc7ff464a4820c45bcdb684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
