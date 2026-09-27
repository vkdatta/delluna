export const name="circle-half";
export const id="dl_027b58c3803441e384ef";
export const url=new URL("../icons/circle-half.svg?v=6845ac3131a3ed72e2e7e75aa73c796c30ff19a6634f39f08cbfe4855314586e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
