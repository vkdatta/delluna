export const name="not-member-of-light";
export const id="dl_ffcc72f2bf1949459a41";
export const url=new URL("../icons/not-member-of-light.svg?v=d19cb4583ed2c28b58071b20ded793725c56ec7638efed91105f6fa4ef0542a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
