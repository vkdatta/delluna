export const name="superset-of-bold";
export const id="dl_82503e4cc5ca7b515f93";
export const url=new URL("../icons/superset-of-bold.svg?v=31ecc88c5b17959620be1a6aaa795d68dc0245b8563d8893e5ca44963050559d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
