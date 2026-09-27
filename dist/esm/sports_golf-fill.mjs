export const name="sports_golf-fill";
export const id="dl_e288047b3428e20bd57c";
export const url=new URL("../icons/sports_golf-fill.svg?v=a03521397aa77a35676afe555739bb125339dac50a9ad31f46b6a603b67d997c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
