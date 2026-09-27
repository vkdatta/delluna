export const name="cards-three-duotone";
export const id="dl_c5aa688eda0c4b2fb363";
export const url=new URL("../icons/cards-three-duotone.svg?v=219872028c99d6dd11e5913a1ea9de9d7672870d4adad82afe4f97554b44137c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
