export const name="goodreads-logo-fill";
export const id="dl_6346b5ce32f4488ab7c2";
export const url=new URL("../icons/goodreads-logo-fill.svg?v=502c9f091ea81c1f17ac924f0877bce4a9fd263d1ec28132a3f0027535060806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
