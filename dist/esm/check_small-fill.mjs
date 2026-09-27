export const name="check_small-fill";
export const id="dl_b80b5360175759bb4a89";
export const url=new URL("../icons/check_small-fill.svg?v=15ea4ec0eb51a9ee855c71279e65c6d9f91884e2d399f7cba86b00c126e7ed4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
