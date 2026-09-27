export const name="selection-slash-duotone";
export const id="dl_b59065b6deffcd961ee9";
export const url=new URL("../icons/selection-slash-duotone.svg?v=36f4eb866b5fd30f4b05bfb363bbf6de4fa829d167c319cd4ab7d9ae21e9f69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
