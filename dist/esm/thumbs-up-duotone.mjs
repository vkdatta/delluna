export const name="thumbs-up-duotone";
export const id="dl_8d8066c8c38c7a31ea37";
export const url=new URL("../icons/thumbs-up-duotone.svg?v=2de90f319993981f99c17d2105c622c18372cf62f5070a7d4cb2de33d30430fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
