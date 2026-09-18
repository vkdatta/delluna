export const name="productivity";
export const id="dl_64beb515ab2241678bb9";
export const url=new URL("../icons/P/productivity.svg?v=4a3c8304851139af05dc0e12f7869f1bbc53509613d6495b787367f287efd0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
