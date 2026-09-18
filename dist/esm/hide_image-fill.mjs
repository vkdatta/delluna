export const name="hide_image-fill";
export const id="dl_89fd6c5a3c25480fb769";
export const url=new URL("../icons/hide_image-fill.svg?v=21f4bdd6fd6786f443be1316a99ae54febe2b9b177cbffe9220f154bbd62f935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
