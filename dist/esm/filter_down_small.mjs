export const name="filter_down_small";
export const id="dl_f2ee2130981c5fd77884";
export const url=new URL("../icons/filter_down_small.svg?v=0e01bcd3ef941491cc01873e33700a542219c6db3ebb17ce0c5b949cf5379983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
