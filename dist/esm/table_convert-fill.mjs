export const name="table_convert-fill";
export const id="dl_59befd930e99eb4ff27a";
export const url=new URL("../icons/table_convert-fill.svg?v=32bfc39751ff56d32560895c2b69dead03d723c7aaa3aa62f1fd1e7423a63e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
