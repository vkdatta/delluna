export const name="align-bottom-simple-fill";
export const id="dl_b941c5bef1864f5486db";
export const url=new URL("../icons/align-bottom-simple-fill.svg?v=2c38e1b9f76562b20de2f16b5027dd53fede4edeee358cde9dab8232bf99088a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
