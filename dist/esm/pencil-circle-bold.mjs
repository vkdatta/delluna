export const name="pencil-circle-bold";
export const id="dl_9fc22f74554a4db0a4fb";
export const url=new URL("../icons/pencil-circle-bold.svg?v=759b0d494c7a8c114b617c84b2a7a6969e7b5f5a96da9c412cb4bd003b291bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
