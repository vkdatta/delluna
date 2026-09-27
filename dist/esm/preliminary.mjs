export const name="preliminary";
export const id="dl_df627c05dc73f0a58968";
export const url=new URL("../icons/preliminary.svg?v=9bd0ac931b73e0402b6b9ca3fe95ce1ad6ce140b3b2cf5fb1196fd575294d14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
