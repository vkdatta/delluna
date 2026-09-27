export const name="repeat_one-fill";
export const id="dl_62ac38dfb4b18a3b0f66";
export const url=new URL("../icons/repeat_one-fill.svg?v=5f42ed8b227eb96d59e86d58ba7e4fe4cd52df62fc7446eaf7f978edc5b7e17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
