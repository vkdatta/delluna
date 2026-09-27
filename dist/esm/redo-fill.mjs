export const name="redo-fill";
export const id="dl_96d73497c44446beb87f";
export const url=new URL("../icons/redo-fill.svg?v=1f5679b6cf5f6e85436a4503706deb3dc8e3138eba39519f9f74835a52cf2898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
