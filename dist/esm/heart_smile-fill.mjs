export const name="heart_smile-fill";
export const id="dl_5cb1c09d94d9282fdca3";
export const url=new URL("../icons/heart_smile-fill.svg?v=d488b97fe6f10ba9eda907ac36666d16cbb8e32d4cb1fd4bf6e78aa97c83f77f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
