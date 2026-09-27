export const name="spotify-logo-duotone";
export const id="dl_137bcf1c76716310669a";
export const url=new URL("../icons/spotify-logo-duotone.svg?v=8c0640bbf80d2025f1456a6c3fe75fd38c13291aae8907433b622ae18427a1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
