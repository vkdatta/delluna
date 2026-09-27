export const name="tv_gen-fill";
export const id="dl_46809813a9edb92858eb";
export const url=new URL("../icons/tv_gen-fill.svg?v=47f4bdd643981c76c625f2ab86bcf55f52e8fd8d0a53a3a113050f7eec1bf04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
