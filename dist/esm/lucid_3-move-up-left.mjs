export const name="lucid_3-move-up-left";
export const id="dl_ca064221a53d4cd992cb";
export const url=new URL("../icons/lucid_3-move-up-left.svg?v=609e862f5637c7a7fd86ccea12577889d7b873fdd3270c1da38b3ab1415a77d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
