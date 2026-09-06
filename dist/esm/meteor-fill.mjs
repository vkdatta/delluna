export const name="meteor-fill";
export const id="dl_3a78509b9ae349ef89de";
export const url=new URL("../icons/meteor-fill.svg?v=730528467701d5fce72a3316c382799779dd271057fd0d81fe2cb0f76aff891f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
