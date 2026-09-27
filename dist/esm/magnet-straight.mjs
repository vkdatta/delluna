export const name="magnet-straight";
export const id="dl_c85c792fd3b642cfb3b3";
export const url=new URL("../icons/magnet-straight.svg?v=b40cec6ec9fad1a5c89b41f4cbc2f954baff98df1a0fd9d299e612d03dba2651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
