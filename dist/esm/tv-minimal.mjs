export const name="tv-minimal";
export const id="dl_60008ea33c4142a385f4";
export const url=new URL("../icons/tv-minimal.svg?v=b5ca1cd582bbbfaaa6312acbcbb4e13df107957751899ac0ed11a30353810346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
