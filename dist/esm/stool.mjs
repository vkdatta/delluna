export const name="stool";
export const id="dl_25a5a36cafcd229a896b";
export const url=new URL("../icons/stool.svg?v=b33449573b3fcba6cc6dd69424b3ec1aa7d1d0f63e54f3c8e8a60a25dc21fca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
