export const name="rewind";
export const id="dl_69b970f927cd48f1b624";
export const url=new URL("../icons/rewind.svg?v=98d15fb0be07114297bfdcbd14a346b12b759c91e3b6644d1fd3ae4d2f7f99c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
