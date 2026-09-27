export const name="axe-duotone";
export const id="dl_38df57a124724cdcab6b";
export const url=new URL("../icons/axe-duotone.svg?v=fae9333a05680de27a0fd0943449b4d8fe6238e9462e911de06fc7b7ab1a815c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
