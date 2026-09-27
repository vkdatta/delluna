export const name="person-simple-snowboard-bold";
export const id="dl_a73a4a73c62f4a4dba68";
export const url=new URL("../icons/person-simple-snowboard-bold.svg?v=20d3deb6a8f9c8b1b253137dec169cbff01992a2c9f01a91754166bb789c0d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
