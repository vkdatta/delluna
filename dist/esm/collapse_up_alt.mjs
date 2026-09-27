export const name="collapse_up_alt";
export const id="dl_0be7fa2a5575ea6d1907";
export const url=new URL("../icons/collapse_up_alt.svg?v=94c2af98954ee0251a68a704402492992027b0ead9f9bb3e5c8cd95dd40516aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
