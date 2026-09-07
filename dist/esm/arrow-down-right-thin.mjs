export const name="arrow-down-right-thin";
export const id="dl_c846302b613e4251aaae";
export const url=new URL("../icons/arrow-down-right-thin.svg?v=52656ae493b91fd61bf4abbce10500ec02fd2f0eb0b929a8994e96bb878d1d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
