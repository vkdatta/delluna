export const name="numbers";
export const id="dl_9644dc4a8ebdc09f39a2";
export const url=new URL("../icons/numbers.svg?v=46dada68ac97196bc705d058fa060a692361bea97c1155bb4e7a05d83db48860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
