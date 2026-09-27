export const name="medal-bold";
export const id="dl_b28418c0299d4e20b15c";
export const url=new URL("../icons/medal-bold.svg?v=5e839824067ec4b0fb87b98ab68ba6498feca1aae78926c57c15587f2989a8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
