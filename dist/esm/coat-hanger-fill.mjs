export const name="coat-hanger-fill";
export const id="dl_c751c4d6b5304d96a7a8";
export const url=new URL("../icons/coat-hanger-fill.svg?v=0ccad9dcf55d35c0f1f247bfa25eb78745c036385edfebf0ff35acf048a2ab65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
