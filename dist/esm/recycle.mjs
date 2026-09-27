export const name="recycle";
export const id="dl_4e4473a81a1742d3b4c7";
export const url=new URL("../icons/recycle.svg?v=a8546b15a9f5d2e14e7a622ded972875eb4badd6308dded7b5ae0229d52b37ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
