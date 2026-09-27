export const name="arrow-line-down-left-bold";
export const id="dl_3d457d9a154c4d68bec7";
export const url=new URL("../icons/arrow-line-down-left-bold.svg?v=ea44d7125f6a68102074bb7db9ddc8b4ee405050807090adf24e79b5c885adc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
