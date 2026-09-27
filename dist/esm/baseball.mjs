export const name="baseball";
export const id="dl_c6c6c405fb764499917f";
export const url=new URL("../icons/baseball.svg?v=83c23c4925a579825b4a12d5c587cde3cbcebaed9a5200cccf4d90e5239f81dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
