export const name="vector-two-fill";
export const id="dl_c35ab06b9a1ecf7f363e";
export const url=new URL("../icons/vector-two-fill.svg?v=5da7a88284c5a9aeec9976f3b0f663b93d95e87b8ea55d47b4eaf49b3def241b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
