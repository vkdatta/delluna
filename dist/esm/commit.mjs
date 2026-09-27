export const name="commit";
export const id="dl_2d9ecc9820249a98b9ba";
export const url=new URL("../icons/commit.svg?v=358acedf0b175b1ecef4d2d636b481e18ff1e848979d1a44401f0b0c1377a827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
