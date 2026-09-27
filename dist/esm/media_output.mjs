export const name="media_output";
export const id="dl_2f501edb410688625f20";
export const url=new URL("../icons/media_output.svg?v=d2035693f9f5f123830f7f54deb8f9edc4601f9d8f58d8b4659ad4124b350641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
