export const name="add_comment";
export const id="dl_15cffe8f8bdb1bc0a2c0";
export const url=new URL("../icons/add_comment.svg?v=82d93ce94897ac5727bca010d166ecaeac0d78ea50052c46f10902da2fab9510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
