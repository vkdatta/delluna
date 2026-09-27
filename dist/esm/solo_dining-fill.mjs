export const name="solo_dining-fill";
export const id="dl_d2f09b42717cc9a72628";
export const url=new URL("../icons/solo_dining-fill.svg?v=d9a21ef0289abbf01a8395109d195d06c13166a735a1ded80c43be07b67a5bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
