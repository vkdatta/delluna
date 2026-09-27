export const name="brightness_5-fill";
export const id="dl_82820add6f7f2f84629d";
export const url=new URL("../icons/brightness_5-fill.svg?v=07128049d4dc649fd6287ee003a1acbb7b18169c2ccdba19cd103d53ba602dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
