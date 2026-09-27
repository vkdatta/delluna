export const name="text-h-two-bold";
export const id="dl_104a827fc50dff9b2a26";
export const url=new URL("../icons/text-h-two-bold.svg?v=aad0ac60a06f42e64834c7c00341a806ac9a7965b69676990a43e568c7c67934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
