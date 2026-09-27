export const name="lucid_1-church";
export const id="dl_381b0097a4234eadb0a5";
export const url=new URL("../icons/lucid_1-church.svg?v=a2129faaada728895f7f31dc82fbe5645ff3fe61a85bd81fee22e07fd0bc9229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
