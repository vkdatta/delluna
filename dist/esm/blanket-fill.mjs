export const name="blanket-fill";
export const id="dl_d7e5b2cc4b2c6d641d45";
export const url=new URL("../icons/blanket-fill.svg?v=342faf26ee77a71c31255e09d9964e344dc38879412c6cd2f7c4e0bd361838b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
