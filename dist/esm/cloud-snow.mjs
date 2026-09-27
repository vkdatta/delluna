export const name="cloud-snow";
export const id="dl_ce6ce756b8b24696a394";
export const url=new URL("../icons/cloud-snow.svg?v=b1e1952366a6b83ff4c5e1abe48c6fe32dbd4e13e4b26552d0f72e1a5200b69c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
