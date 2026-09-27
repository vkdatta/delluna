export const name="pencil-slash";
export const id="dl_fb8eefb8dba2458e8e0e";
export const url=new URL("../icons/pencil-slash.svg?v=2d100b5f253d816d2bde9681966236bdd141657c38ecf591ed60b3dfc40cf58e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
