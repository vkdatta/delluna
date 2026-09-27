export const name="split_scene_up";
export const id="dl_952381b7dc1c2b31152c";
export const url=new URL("../icons/split_scene_up.svg?v=8e279a906fa373a718a4734c074a642c338258f8e5309faaaacd8ccca0b105ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
