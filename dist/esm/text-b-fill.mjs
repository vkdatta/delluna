export const name="text-b-fill";
export const id="dl_0af2f88c5820b7fa723b";
export const url=new URL("../icons/text-b-fill.svg?v=7b9ed4acf7992ed2784446a547dbda4427929f34403a34371b0ab30269e055be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
