export const name="square_swap";
export const id="dl_5667428e68ae41858541";
export const url=new URL("../icons/square_swap.svg?v=96ec10f9aabf96ab165870689bedd8dbbda034f0757e12829582b390932cd41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
