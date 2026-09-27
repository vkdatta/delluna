export const name="sentiment_dissatisfied-fill";
export const id="dl_26b8dc028f5eb683ea83";
export const url=new URL("../icons/sentiment_dissatisfied-fill.svg?v=1ef6b887d19eb89db7800df2e2be014acfda3731a82b1280ee8bf61c4ac5b5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
