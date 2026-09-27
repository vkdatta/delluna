export const name="preview-fill";
export const id="dl_58a1539fea19c6c41b12";
export const url=new URL("../icons/preview-fill.svg?v=2207e5f28b00280978eaf010565c74cc932126cb23729d58920671306458ac33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
