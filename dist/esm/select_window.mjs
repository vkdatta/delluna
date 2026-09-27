export const name="select_window";
export const id="dl_b1d1a28414b6bd8e9dbd";
export const url=new URL("../icons/select_window.svg?v=a3ed515e04d79af297ac7de5b4a9705e3c16ad7c9d64d06acbf8adedf121ffc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
