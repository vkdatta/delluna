export const name="baseball-bold";
export const id="dl_5fbd2db381fb4b74a1cc";
export const url=new URL("../icons/baseball-bold.svg?v=4895d88afe14fdeab2f32e115bded60507427a00792b60441c0b0d688cab5319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
