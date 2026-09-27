export const name="library_music";
export const id="dl_b61eb7cd6d7de2f9c37e";
export const url=new URL("../icons/library_music.svg?v=3f9a05348257903fe5dfb9ddf5a507fc0708382bfeaa9647df2908ade4d80f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
