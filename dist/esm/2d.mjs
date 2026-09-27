export const name="2d";
export const id="dl_b69fcd894f8f896f89a6";
export const url=new URL("../icons/2d.svg?v=413928b8ed04e7f480f42c143a0c86cabf4dff32bbd59c122a16b5cf9b2f7e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
