export const name="counter_2";
export const id="dl_0382f95658f15524127e";
export const url=new URL("../icons/counter_2.svg?v=700a29248dbf941529a32fe968eeb2823eb5e36af351725145986c2cca45e0fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
