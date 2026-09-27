export const name="nest_multi_room";
export const id="dl_f1c3f78def9f96dfef62";
export const url=new URL("../icons/nest_multi_room.svg?v=3db4334452f6cf414ff0ad5bc2d565b88edf230abbea4d477b6f7067bd2bf47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
