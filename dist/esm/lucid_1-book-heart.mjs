export const name="lucid_1-book-heart";
export const id="dl_094b8d1b76ff4218881c";
export const url=new URL("../icons/lucid_1-book-heart.svg?v=5d475e5984f163451bbf656a6dcc74df0d7d7dfe240b2ea7862b870f41b89318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
