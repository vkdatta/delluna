export const name="bold-cross";
export const id="dl_5a2e66ba17d1953c0bf8";
export const url=new URL("../icons/bold-cross.svg?v=144dda9795048dfaa71eff04f0dafb5c7290a97ab4589b5b1aec7eef81b632b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
