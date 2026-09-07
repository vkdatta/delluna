export const name="bag-simple-thin";
export const id="dl_8a0109bb863848b1ad9e";
export const url=new URL("../icons/bag-simple-thin.svg?v=8b82ff7cc4c5d430b2ae931e5e0965aace0c80f3ba4b0f7873dfe8bfb401bbc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
