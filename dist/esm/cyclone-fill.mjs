export const name="cyclone-fill";
export const id="dl_0c276f5e5b11f24ceb17";
export const url=new URL("../icons/cyclone-fill.svg?v=3f0566f0a5aa8a1ad375067cc3ffe5ffdc6da358b05c421485e68de29be1a43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
