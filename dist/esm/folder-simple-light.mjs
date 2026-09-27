export const name="folder-simple-light";
export const id="dl_4cef02cea99749139d8d";
export const url=new URL("../icons/folder-simple-light.svg?v=a1fa7f60cac79fc51bdc39871348931bbe5dcd1f3e24110cd636128556bb1aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
