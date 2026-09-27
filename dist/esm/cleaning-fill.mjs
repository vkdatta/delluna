export const name="cleaning-fill";
export const id="dl_8a8a7c22ef3ecb673210";
export const url=new URL("../icons/cleaning-fill.svg?v=a0f30d51466a056d97a16b52cebc41b39b96b17ca4b92aa6836e9f934365e0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
