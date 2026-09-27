export const name="smart_toy-fill";
export const id="dl_47348cdd258998c6e18c";
export const url=new URL("../icons/smart_toy-fill.svg?v=a1c538140843823d222579fedd19b9a47a18da277a4e5c53aea3f8e6a0a2f420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
