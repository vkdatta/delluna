export const name="lucid_3-share-2";
export const id="dl_dd3e4e94c5a0404cb415";
export const url=new URL("../icons/lucid_3-share-2.svg?v=35b875d5f475aac66baba1c7f7402b8ab8ecb6dd4e58f89ccadc8569383c78d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
