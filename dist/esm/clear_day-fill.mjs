export const name="clear_day-fill";
export const id="dl_15126fca536375ae1bed";
export const url=new URL("../icons/clear_day-fill.svg?v=bbd8f803704b695d1d74d30d530283ea9040e66297ed48ab877757a1a4cb895d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
