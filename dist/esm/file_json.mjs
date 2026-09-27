export const name="file_json";
export const id="dl_f7831823ca2eaf48748d";
export const url=new URL("../icons/file_json.svg?v=34ffe2f34ec6f045a509b214c6163e5ced72d536d578a8dc48ef933ede5031a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
