export const name="caret-line-up-fill";
export const id="dl_4d594faf9582467c844b";
export const url=new URL("../icons/caret-line-up-fill.svg?v=f5fc188f52ff536c98ce87895a39265856185426cf7d4067c5062af945b2fd0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
