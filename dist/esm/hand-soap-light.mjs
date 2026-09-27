export const name="hand-soap-light";
export const id="dl_ba3cae7d4b4542f296cc";
export const url=new URL("../icons/hand-soap-light.svg?v=058fa01573e48f6427b98e9e81c99dd63b822d90f40adbe8b757952cee48b4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
