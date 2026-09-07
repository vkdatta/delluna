export const name="unfold_less_alt";
export const id="dl_a9353d4e78ef4ea38acc";
export const url=new URL("../icons/all_60_named_svgs/unfold_less_alt.svg?v=7f41eacb3f10f7676d63b5a3e1455824de599ff2e62fc42a639af16ff4d5fee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
