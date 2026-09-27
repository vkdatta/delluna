export const name="lucid_3-skip-back";
export const id="dl_225d363e782945239698";
export const url=new URL("../icons/lucid_3-skip-back.svg?v=bb3e8bebe3bf178ba93f925ef6d79943ead6ce4ed5ea0028403badd3e7a50352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
