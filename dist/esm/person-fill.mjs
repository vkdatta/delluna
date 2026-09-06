export const name="person-fill";
export const id="dl_04e99296c9eb47f29e4e";
export const url=new URL("../icons/person-fill.svg?v=f56b99998503175d7f6c28412a67922c711f08af3f36f0a939ccb707076a1e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
