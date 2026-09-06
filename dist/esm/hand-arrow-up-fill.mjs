export const name="hand-arrow-up-fill";
export const id="dl_f831502755fe4d6a952a";
export const url=new URL("../icons/hand-arrow-up-fill.svg?v=05ef08e0a055e5ff61901257f1219110e12863a1d634da3b69f08a385b367aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
