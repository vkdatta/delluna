export const name="popsicle-bold";
export const id="dl_b11efeceecd24a5aabf5";
export const url=new URL("../icons/popsicle-bold.svg?v=5f96d1a53c7c8ea0a160b9964a1fa0aead5c134f946d056a43b582eee3582eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
