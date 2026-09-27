export const name="tv_next-fill";
export const id="dl_f38a719723d592638e2f";
export const url=new URL("../icons/tv_next-fill.svg?v=879d5eafcb727f0695d2e54ba5515b0652aee84bf514a525f322dac7f7415548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
