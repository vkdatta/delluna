export const name="lucid_3-move-up-left";
export const id="dl_ca064221a53d4cd992cb";
export const url=new URL("../icons/lucid_3-move-up-left.svg?v=7d7c627c79792ee93cb1d3ef0e46c55baee1fe16d31480a647fad5f4c76f9b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
