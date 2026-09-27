export const name="upload";
export const id="dl_6698002408934c3eaa08";
export const url=new URL("../icons/upload.svg?v=d7d020a8cc31e6a2f064783ce306793ff36a9fdafae783cc904bd342facc4eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
