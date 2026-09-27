export const name="filter_1";
export const id="dl_63a7340399f795bf3225";
export const url=new URL("../icons/filter_1.svg?v=88e7197130ca04ee9f6864e2883d9ef5fd56f286dcefcc76c424d2549f31bbce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
