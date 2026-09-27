export const name="flying-saucer-bold";
export const id="dl_21f3e9b330084cebab3a";
export const url=new URL("../icons/flying-saucer-bold.svg?v=4bd48142d3225b8b670a13187bd9f07eeedaa26f8385d944a91bbc71f7a2fb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
