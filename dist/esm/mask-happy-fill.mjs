export const name="mask-happy-fill";
export const id="dl_62980e6faa7b4b8ba7d8";
export const url=new URL("../icons/mask-happy-fill.svg?v=44ab43ebbd6641f90a58916671e8578e45fdadc2c7145deaf84461d5fea42525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
