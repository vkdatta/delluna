export const name="note-blank-fill";
export const id="dl_6c63b0e82e5b4cc6a6ee";
export const url=new URL("../icons/note-blank-fill.svg?v=371c3f915cb88f599305a76e589b93aede59651f31f5cb016c087a0f9fd3fce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
