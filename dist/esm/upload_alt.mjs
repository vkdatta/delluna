export const name="upload_alt";
export const id="dl_30452aec0b4b526300fc";
export const url=new URL("../icons/upload_alt.svg?v=3f149c48c8cb35dfb446999a16fd09b7a5378b46161369ba59debacbf4e84523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
