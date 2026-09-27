export const name="breaking_news_alt_1";
export const id="dl_4650227ed8b46ecc0409";
export const url=new URL("../icons/breaking_news_alt_1.svg?v=9fba70d4ba00775ab81864a81054036071f1058b90b016f4c343072009f2723c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
