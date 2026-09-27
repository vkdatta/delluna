export const name="android-logo";
export const id="dl_297c6865b91a4d1aabc6";
export const url=new URL("../icons/android-logo.svg?v=0b266cc34c09c891dfa158bd08ecb7aa245f5ee7f009cc068b46d3e7cfd7cec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
