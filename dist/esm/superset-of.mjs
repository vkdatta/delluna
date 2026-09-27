export const name="superset-of";
export const id="dl_ff843b0bfb34fcc9c803";
export const url=new URL("../icons/superset-of.svg?v=404d89d0684f86804d72da70cc2b7c78a5f7b8483f301e2f54db624fafb07c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
