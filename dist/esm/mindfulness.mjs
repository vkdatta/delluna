export const name="mindfulness";
export const id="dl_3d9a61754f704eb99dfd";
export const url=new URL("../icons/mindfulness.svg?v=0d1b52bd5de249fabb7b6229e4e29e86dcabebc50fc8b3dc03907e7b6fb2e9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
