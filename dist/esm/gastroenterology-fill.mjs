export const name="gastroenterology-fill";
export const id="dl_176e3eedb3eeb6133ead";
export const url=new URL("../icons/gastroenterology-fill.svg?v=972c46af8baa7049bc11ca47ae9fecbc49e74c2029e9a14a0887b9c10c031481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
