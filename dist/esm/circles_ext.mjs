export const name="circles_ext";
export const id="dl_fe382ce1d94575a94690";
export const url=new URL("../icons/circles_ext.svg?v=56f070425c2433b9ec8a63c8217c47b13ad97080d0c2239b06d0c60ef744d617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
