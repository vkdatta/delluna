export const name="lucid_1-cloud-cog";
export const id="dl_3bbf0f67957645c69bfc";
export const url=new URL("../icons/lucid_1-cloud-cog.svg?v=5c6ca860e6be69d61cd8bffcfb7cd66ae6485c81a6a9ec9cbb05b5aaeeea5cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
