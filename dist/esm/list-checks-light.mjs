export const name="list-checks-light";
export const id="dl_b5f3eef5bb8546b7acb9";
export const url=new URL("../icons/list-checks-light.svg?v=4e99f4baac10ae8acf595247c0bbbf587707107d1bf7f60b8ef73cfa7a41ec3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
