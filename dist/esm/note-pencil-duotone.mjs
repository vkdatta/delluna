export const name="note-pencil-duotone";
export const id="dl_e52bd37a2b41459eae79";
export const url=new URL("../icons/note-pencil-duotone.svg?v=42e4e6d15c523016812041aa4e692c8ab9b6d6488c7b8864adb537fefc083fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
