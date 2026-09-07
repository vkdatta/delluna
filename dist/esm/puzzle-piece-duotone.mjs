export const name="puzzle-piece-duotone";
export const id="dl_8734f6033d61462996c9";
export const url=new URL("../icons/puzzle-piece-duotone.svg?v=21b5ecfdd65a1aaced52daf72e1ac405e4de7c2a1363a9065800a40fb15cb602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
