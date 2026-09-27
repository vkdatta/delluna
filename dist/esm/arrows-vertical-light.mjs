export const name="arrows-vertical-light";
export const id="dl_12631596749049bf94e7";
export const url=new URL("../icons/arrows-vertical-light.svg?v=49006cdb0f7429075a76e9c026b70ae89fc6586ae9fa35ffda8b3b92b8fc31a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
