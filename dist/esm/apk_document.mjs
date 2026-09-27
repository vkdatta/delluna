export const name="apk_document";
export const id="dl_257c04c40b3a44e2b925";
export const url=new URL("../icons/apk_document.svg?v=797e2c8486e096be2033d43f782db83c4143d7d6be1d9786824d42cb3ab419ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
