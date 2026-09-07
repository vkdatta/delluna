export const name="lucid_1-box";
export const id="dl_708f51ff24dd44d1918d";
export const url=new URL("../icons/lucid_1-box.svg?v=fe943b8f10489e7522d116c54cc99001f1a1fe7dfa6e2bf97b08dfae5c6041b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
