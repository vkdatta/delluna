export const name="flag_check-fill";
export const id="dl_c241d2b46d857574ddee";
export const url=new URL("../icons/flag_check-fill.svg?v=0dd1c6cf4b81a193247ffd9c43d031a13b1dc5bf345cd0d9ba12f071e729d20e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
