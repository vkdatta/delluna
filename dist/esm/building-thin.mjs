export const name="building-thin";
export const id="dl_2b8eb98c4f074f0c9af3";
export const url=new URL("../icons/building-thin.svg?v=c19921b72be3bfe65d2e9955e906663dd8a3383801285501343218cb21670212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
