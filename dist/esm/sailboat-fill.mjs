export const name="sailboat-fill";
export const id="dl_77b6d39ebbeeed460a04";
export const url=new URL("../icons/sailboat-fill.svg?v=0a6eb5740d41c2a6812a0e8a2a61534623f5473056b5f76df64973635936ae30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
