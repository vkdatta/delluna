export const name="lightning-slash-bold";
export const id="dl_c0688c27361e466b96e4";
export const url=new URL("../icons/lightning-slash-bold.svg?v=8b8dd65c9f714fe45bd1a958aa0f5f229719e34e096047eebf86f140d71fddaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
