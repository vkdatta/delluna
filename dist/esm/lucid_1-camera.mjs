export const name="lucid_1-camera";
export const id="dl_a345e5a9328d4a9ba124";
export const url=new URL("../icons/lucid_1-camera.svg?v=5a647048ae7e402154de0cfa1e8183b963d6111f4f41bc100bfaee9ab91fafa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
