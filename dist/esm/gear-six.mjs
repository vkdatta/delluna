export const name="gear-six";
export const id="dl_66eb1a4a60ba4a2aa183";
export const url=new URL("../icons/gear-six.svg?v=f98d9e85d80fd4e9b3cfda82bed7da1e96985baf1066243e24eb38ca91d9cea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
