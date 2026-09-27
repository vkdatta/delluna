export const name="globe-hemisphere-west-bold";
export const id="dl_bebc114615c84a05b233";
export const url=new URL("../icons/globe-hemisphere-west-bold.svg?v=62f05cbfb502f4c61740a96339c4966b5b8c6b7199fc8febd7d26ebdca6e76a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
