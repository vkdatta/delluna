export const name="file-audio";
export const id="dl_2a474ddb2a4f4e7c8a68";
export const url=new URL("../icons/file-audio.svg?v=adcacce695f7bc28beabe2de74a532344b38ab51936d8fb197f7302cb8a3ce40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
