export const name="lucid_2-folder-input";
export const id="dl_c7ef82ba5f5447488779";
export const url=new URL("../icons/lucid_2-folder-input.svg?v=d221be06615969bedec7f04ab54ad6b42688920a4627431acef071739863eea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
