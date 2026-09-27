export const name="number-square-two";
export const id="dl_1ae4ca058ff7486581eb";
export const url=new URL("../icons/number-square-two.svg?v=15905e3e8f2336c0c7b1670abb030c8b4ade7830a13876d680768d61ee9d230d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
