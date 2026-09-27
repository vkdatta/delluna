export const name="perspective-thin";
export const id="dl_ec6cbea1377d41d2aa04";
export const url=new URL("../icons/perspective-thin.svg?v=c9211eb13d31862859ef9d83c71b6171fbe7151fe4a1a30cbb9deb3c74dd9253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
