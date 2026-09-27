export const name="minus-circle-thin";
export const id="dl_10d9b88294214d6196b4";
export const url=new URL("../icons/minus-circle-thin.svg?v=e69f7f3001682a05c181ca666a526e4b158b7779ea9fefa488c113141e7b5d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
