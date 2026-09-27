export const name="wrap_text";
export const id="dl_db1b5279557d5d12e15d";
export const url=new URL("../icons/wrap_text.svg?v=a926dd330b08534ec017128c933d4c2222cbd6875022cae45803b17a96c741e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
