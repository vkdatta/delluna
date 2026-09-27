export const name="wb_twilight_2";
export const id="dl_e3f3fdf1efe17b773b34";
export const url=new URL("../icons/wb_twilight_2.svg?v=e0c25a14925ca882ed419babcd0e792c36576ff9945abff60755f0b237ca6948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
