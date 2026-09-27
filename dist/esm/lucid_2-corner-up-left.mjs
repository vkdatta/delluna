export const name="lucid_2-corner-up-left";
export const id="dl_7f8b48209cd9467b9b78";
export const url=new URL("../icons/lucid_2-corner-up-left.svg?v=fc16a8e9540e1e8220e35b150e6f50182b7f332d983f3649209f7529f087408a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
