export const name="folder-simple-user-bold";
export const id="dl_ad7ea5d37e6b4ff2a316";
export const url=new URL("../icons/folder-simple-user-bold.svg?v=9f7592d8f8eac9d11bebc0d82ff845d243300a9e0fc5987b7070855d9c4a6944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
