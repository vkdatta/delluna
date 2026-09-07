export const name="stairs-bold";
export const id="dl_34f26556f476444b8ed8";
export const url=new URL("../icons/S/stairs-bold.svg?v=45db58fc7a8dcda7fee88ecd4cd1834e68bc9b359e25551af979933b099a8cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
