export const name="genres-fill";
export const id="dl_1fd10ef4b833f8b70b55";
export const url=new URL("../icons/genres-fill.svg?v=63f9cc92ecb5bf3a310108e99246907556901f9d971ad654410815b0a0b4c8ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
