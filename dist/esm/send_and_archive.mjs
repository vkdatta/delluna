export const name="send_and_archive";
export const id="dl_fa7b0b54553e4fb3bbf1";
export const url=new URL("../icons/S/send_and_archive.svg?v=254befe421aa96acd265cd2fa2fb4588fc9d1bf39fbf0b7adc76286578753ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
