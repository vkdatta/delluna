export const name="lucid_1-arrow-up-from-line";
export const id="dl_82dc0d0d07a84a989ef8";
export const url=new URL("../icons/lucid_1-arrow-up-from-line.svg?v=bc9bcacf0ac451f8a6f8c40da13bf2ae69225f1ae0b4924f159d047b9ac2ace9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
