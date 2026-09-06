export const name="envelope-simple-fill";
export const id="dl_7326117399f7478b8024";
export const url=new URL("../icons/envelope-simple-fill.svg?v=6cde9c0a359e967e36a6d3e54b720c67df75ce78f39e9adc7f29a7799bd09b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
