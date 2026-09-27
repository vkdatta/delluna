export const name="lucid_3-pencil";
export const id="dl_d9012e6e9d60493abfa9";
export const url=new URL("../icons/lucid_3-pencil.svg?v=271000bbd8cf4d1d5be52ad51bfdf61a7e8a603be4f8fa3852b7d3eb5ba5a5da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
