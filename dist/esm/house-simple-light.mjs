export const name="house-simple-light";
export const id="dl_5dcb858eac16469c8f75";
export const url=new URL("../icons/house-simple-light.svg?v=388d5d9e0d288e0474d6102338644aead11cb25c4c7b495536ae915245241584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
