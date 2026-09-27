export const name="hockey-light";
export const id="dl_dae91a9031f24788a413";
export const url=new URL("../icons/hockey-light.svg?v=ece0b0a7ef750fb8177b7b10f825ca77f880f8a6997418f215269bf831ba7656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
