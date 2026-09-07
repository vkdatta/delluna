export const name="offset";
export const id="dl_559420d9b80942c4aa91";
export const url=new URL("../icons/offset.svg?v=1beb7f455d941714bcc3201177528327d3d7a97dbbf3a8354ef03e70aec1e457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
