export const name="lucid_2-infinity";
export const id="dl_7fabe8b697f140b5a5ea";
export const url=new URL("../icons/lucid_2-infinity.svg?v=5cafbd89f9df5d0c9d362bdbea1eb02e4bc3c17cd48b3f7b129d6ecfe650d81f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
