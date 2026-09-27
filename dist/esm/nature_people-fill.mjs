export const name="nature_people-fill";
export const id="dl_b5a6111c748563837370";
export const url=new URL("../icons/nature_people-fill.svg?v=a5fc1044d7873f9259a91f888f3ac9e982d44c4df14914fefc7281f28059d504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
