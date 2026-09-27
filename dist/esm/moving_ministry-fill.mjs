export const name="moving_ministry-fill";
export const id="dl_3b711bd152f8d41f5569";
export const url=new URL("../icons/moving_ministry-fill.svg?v=3eae765a23e05572d5a58800edf23744b5ce03b1c0d6dafef449b480add47c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
