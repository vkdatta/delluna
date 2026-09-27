export const name="ad-fill";
export const id="dl_6fd59ace55e6864fdb66";
export const url=new URL("../icons/ad-fill.svg?v=072eb178769e8b5195b231292dbb7b8ac39e542006eba4c81067173d786425ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
