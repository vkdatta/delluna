export const name="hanami_dango";
export const id="dl_99241626c0a95dde0fce";
export const url=new URL("../icons/hanami_dango.svg?v=fab37f3d10c0e33953264c6623cca8fbc92800f313dc6f9e67dc9d2dc80acea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
