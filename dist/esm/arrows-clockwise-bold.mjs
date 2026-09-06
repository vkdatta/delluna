export const name="arrows-clockwise-bold";
export const id="dl_9020b335aaf24fc3b89d";
export const url=new URL("../icons/arrows-clockwise-bold.svg?v=f79592c23ce2e13807dcf27ed5de18aa1484beb9a976b0c0bfd81ee280198b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
