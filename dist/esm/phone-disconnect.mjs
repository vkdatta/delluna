export const name="phone-disconnect";
export const id="dl_52cafbcac812463182f8";
export const url=new URL("../icons/phone-disconnect.svg?v=2bf702e6d6c8e5329e518cbdeb8abcf2a347fd5761350075cb07e6bdb64b276f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
