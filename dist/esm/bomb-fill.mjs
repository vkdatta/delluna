export const name="bomb-fill";
export const id="dl_b6d72f04fd6b4f989a5b";
export const url=new URL("../icons/bomb-fill.svg?v=5df29121b56d240ef203e2d4cb0903f818610f7062e7f0d36b1710f3882f0199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
