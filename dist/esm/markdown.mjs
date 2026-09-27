export const name="markdown";
export const id="dl_eaf70ae77a3e5d31d5aa";
export const url=new URL("../icons/markdown.svg?v=3ed602462277c2856825ee778be1ce2e3e52e80bca4f181adc6c1fd4e4b1a89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
