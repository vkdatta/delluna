export const name="arrows-left-right-fill";
export const id="dl_4a8a2dab52984b1f924b";
export const url=new URL("../icons/arrows-left-right-fill.svg?v=06d83187f1d4015725b99909d67e150a1b1dd13f414009a6cb3b824322e5dde1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
