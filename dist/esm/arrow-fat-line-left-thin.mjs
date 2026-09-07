export const name="arrow-fat-line-left-thin";
export const id="dl_34d756bcebb1403c8c52";
export const url=new URL("../icons/arrow-fat-line-left-thin.svg?v=c6f96586507e1d156314cefd43b785d0d34b47dc07bb5cd90eb55d8061d609fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
