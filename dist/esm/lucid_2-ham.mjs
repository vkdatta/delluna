export const name="lucid_2-ham";
export const id="dl_e3275304774f45cb8093";
export const url=new URL("../icons/lucid_2-ham.svg?v=035b6ee03bc11e18fc8d2567d40c345d8893c0e0bd3ced068eb35bfe1a674e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
