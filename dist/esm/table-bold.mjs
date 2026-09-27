export const name="table-bold";
export const id="dl_bd64b3718226cb69c18e";
export const url=new URL("../icons/table-bold.svg?v=b184e3ad67b9a3714bfcb21d6ab2f6f7cbfb6d4755127bdb4b60aa63bc272132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
