export const name="tea-bag-thin";
export const id="dl_fd319076da2648b7ba6e";
export const url=new URL("../icons/T/tea-bag-thin.svg?v=d377a8712463d747eaa56e142991bd1571e7263eb72fd7972f803600ac4fd70d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
