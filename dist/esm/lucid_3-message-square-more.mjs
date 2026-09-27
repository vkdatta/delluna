export const name="lucid_3-message-square-more";
export const id="dl_66ae719ede0c4cfe859b";
export const url=new URL("../icons/lucid_3-message-square-more.svg?v=e6415fb5093b299f945b481ef683d2c676e1b0d8ca6b16795a005d6dc34de0f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
