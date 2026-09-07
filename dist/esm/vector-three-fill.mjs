export const name="vector-three-fill";
export const id="dl_9f6be9ffb5ec4186bb78";
export const url=new URL("../icons/V/vector-three-fill.svg?v=b750316cf72d625fff71d6f9c41b9f0b40ae91fdefdd00a14fbd2ee472b2677a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
