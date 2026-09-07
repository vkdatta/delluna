export const name="user-focus-fill";
export const id="dl_50d89bc52172453ea796";
export const url=new URL("../icons/U/user-focus-fill.svg?v=fdfd93a0bf89db5ac8c7f72ef581f890def3df830f5233da62bdc7e98ee77be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
