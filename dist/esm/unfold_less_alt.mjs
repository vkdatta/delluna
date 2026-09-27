export const name="unfold_less_alt";
export const id="dl_c891fe17b79caf3c03f1";
export const url=new URL("../icons/unfold_less_alt.svg?v=e01f5a51ce5f02f966df9bad4cfea6dee552ff1d6e4930c80c99b5b6f7e6882c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
