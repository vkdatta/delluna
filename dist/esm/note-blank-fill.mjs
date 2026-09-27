export const name="note-blank-fill";
export const id="dl_6c63b0e82e5b4cc6a6ee";
export const url=new URL("../icons/note-blank-fill.svg?v=c2c2ff801a6b36fa93bd9904e5d12330b52e69b3945080d9ade13607529c6ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
