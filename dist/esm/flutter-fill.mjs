export const name="flutter-fill";
export const id="dl_71c799dc128e6b6697da";
export const url=new URL("../icons/flutter-fill.svg?v=63b6ea18f9dcdbcf3263681d65ba0bde5ade47a3a2653ff542dbcd0c092e14f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
