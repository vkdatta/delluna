export const name="air_purifier";
export const id="dl_eaf05dc5b5b6513c12b1";
export const url=new URL("../icons/air_purifier.svg?v=ebc37038f8ed1cb81d7d018565a7b17717308af9c488064fcd602b22bbb0dedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
