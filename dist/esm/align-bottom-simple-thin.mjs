export const name="align-bottom-simple-thin";
export const id="dl_d62e5a7afb7a464093e1";
export const url=new URL("../icons/align-bottom-simple-thin.svg?v=b3cb40a6256fcf66d451dd8c61710b4da044cc364a57996fff7b9078220f09d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
