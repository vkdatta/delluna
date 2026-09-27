export const name="quick_reorder";
export const id="dl_97ec531c1940ce69b02d";
export const url=new URL("../icons/quick_reorder.svg?v=11996376732db804f381cb9e17d81ca83798b3a4d2003963aa86b931179c6059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
