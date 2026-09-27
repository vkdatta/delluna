export const name="autorenew";
export const id="dl_75b97f34e45883f31585";
export const url=new URL("../icons/autorenew.svg?v=5be236f5d4eb3a60011c36c4ffd96c5b29b1dfa0feb7f7c7459e85e91e9d3a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
