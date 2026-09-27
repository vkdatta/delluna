export const name="star-x";
export const id="dl_d7af8668f37f4092a18a";
export const url=new URL("../icons/star-x.svg?v=ffa65f53243a0bedd51f9dc0c33160d6d09a82f8e915529976e5eee009697889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
