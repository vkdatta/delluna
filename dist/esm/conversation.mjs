export const name="conversation";
export const id="dl_efb23ff63f52472f94ce";
export const url=new URL("../icons/C/conversation.svg?v=be3afcbf2c1e3b4344db29086905075efa73a01cd80d2134f307abd6f41b320c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
