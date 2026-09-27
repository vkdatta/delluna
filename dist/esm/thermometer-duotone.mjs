export const name="thermometer-duotone";
export const id="dl_cc132ae587e70cf8adaa";
export const url=new URL("../icons/thermometer-duotone.svg?v=8abb38ecd59af44c39fa093ea36f3b96a6d272b8db229f00cfb8e569537695bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
