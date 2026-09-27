export const name="split_scene_2";
export const id="dl_d23a775b6c0e69ada821";
export const url=new URL("../icons/split_scene_2.svg?v=c2bafb8eddfde143ea0562b3639d2b327ea77605bd5526d882a18fae1c3fb40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
