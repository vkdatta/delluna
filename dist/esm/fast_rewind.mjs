export const name="fast_rewind";
export const id="dl_0c0d10f009f152a71af6";
export const url=new URL("../icons/fast_rewind.svg?v=4b5a90768cecf858b617c192cea667008583436f32ba77870009473c6b5617ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
