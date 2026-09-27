export const name="cast_pause-fill";
export const id="dl_475d9359ca5f82f75f1e";
export const url=new URL("../icons/cast_pause-fill.svg?v=d97c4bad89d4704e3f0adadd60e1bc97dc61cd8f1d72fe8d73158a5f71dae9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
