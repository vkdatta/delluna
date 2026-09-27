export const name="pause-circle-light";
export const id="dl_f1dac52679fa47f6a91e";
export const url=new URL("../icons/pause-circle-light.svg?v=c1d2bf239279994b727ffd3ee58c392063c5b735d0a7d068538eafabe5e45f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
