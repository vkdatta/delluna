export const name="lucid_3-newspaper";
export const id="dl_515b4f3d4eed4a62b73a";
export const url=new URL("../icons/lucid_3-newspaper.svg?v=766bafa703e2f1272f6da9cf982915ae0fe7411741a75ae750793a1529745a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
