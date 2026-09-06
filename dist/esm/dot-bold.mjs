export const name="dot-bold";
export const id="dl_bbc10d4b25544718852b";
export const url=new URL("../icons/dot-bold.svg?v=9505f9718126efd0f828f8394c23c567d03db9ce3c3a635378153b09c5d00558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
