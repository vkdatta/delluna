export const name="sprint-fill";
export const id="dl_92b31d28007069e8dd18";
export const url=new URL("../icons/sprint-fill.svg?v=be42695f55aa16153e36e6886d4d7917b9200c859142aefeaf3cba2afccb0158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
