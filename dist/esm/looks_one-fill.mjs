export const name="looks_one-fill";
export const id="dl_fb6bca8214814a73b18d";
export const url=new URL("../icons/looks_one-fill.svg?v=46f4487bd0aa590dea62f573a93a700ad5ab1b5b97d926dcc45d09049bcd9f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
