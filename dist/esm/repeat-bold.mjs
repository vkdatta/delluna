export const name="repeat-bold";
export const id="dl_931d6f3a94bc4a029dca";
export const url=new URL("../icons/repeat-bold.svg?v=27beb8327b7112d09c49d81930f7e9b7e7fb4a89f7cc3ccf52c4344edad0eb43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
