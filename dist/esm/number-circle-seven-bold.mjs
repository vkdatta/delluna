export const name="number-circle-seven-bold";
export const id="dl_5f0f36ae3be240499763";
export const url=new URL("../icons/number-circle-seven-bold.svg?v=1e6ac88b496c133bd6422a7a1132704031a8cbbbbcd74d005a237671bbd55ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
