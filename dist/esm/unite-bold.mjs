export const name="unite-bold";
export const id="dl_a152860bfc81d2580114";
export const url=new URL("../icons/unite-bold.svg?v=5c089eede2decdbfe4e4d4ceefeed594db1bc25db899ad8c1c1b8971a433739f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
