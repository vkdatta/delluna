export const name="sunny-fill";
export const id="dl_6d1d3c966698679c3519";
export const url=new URL("../icons/sunny-fill.svg?v=bbd8f803704b695d1d74d30d530283ea9040e66297ed48ab877757a1a4cb895d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
