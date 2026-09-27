export const name="lucid_2-focus";
export const id="dl_37217cdd281c4b4a9e32";
export const url=new URL("../icons/lucid_2-focus.svg?v=f4e5fbb1ee2c70902bde3f8a5c693f7a3569bc1b2d7e622fc3d8b5eb617408e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
