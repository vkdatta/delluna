export const name="sticky-note-plus";
export const id="dl_310c75e70665425088c7";
export const url=new URL("../icons/sticky-note-plus.svg?v=42fbe733200ecdc9671b83e97d77aefe790f1a970af3f16c6ec387ec3e6500fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
