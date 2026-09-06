export const name="hand-tap";
export const id="dl_5a63b5946202445f9e1c";
export const url=new URL("../icons/hand-tap.svg?v=32c4c4f80fbbe5ee6bf45a6769da96466dcafddf79965c2bbdb7635fab405409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
