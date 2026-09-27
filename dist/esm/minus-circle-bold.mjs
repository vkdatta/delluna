export const name="minus-circle-bold";
export const id="dl_a26f8e6d3f4f43f5b280";
export const url=new URL("../icons/minus-circle-bold.svg?v=c22d6b1fd1422f63a89ad6b7373bec0c95505f75c3436ddca579d046c94692d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
