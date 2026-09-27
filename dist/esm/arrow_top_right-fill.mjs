export const name="arrow_top_right-fill";
export const id="dl_fe50765f4ffd43963a9d";
export const url=new URL("../icons/arrow_top_right-fill.svg?v=caef7383a06b97d9eb48594f18b98acf5fe54ca7ebe40775529f0b6de7da5fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
