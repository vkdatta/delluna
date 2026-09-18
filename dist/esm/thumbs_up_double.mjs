export const name="thumbs_up_double";
export const id="dl_7428751fd98f47a6b271";
export const url=new URL("../icons/thumbs_up_double.svg?v=ba3785395661a0783c3fe8d61f37e4fd6d47eddac9880979751b7b46757fb8fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
