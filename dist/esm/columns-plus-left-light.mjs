export const name="columns-plus-left-light";
export const id="dl_c6f45d77baa641d0a674";
export const url=new URL("../icons/columns-plus-left-light.svg?v=1db4196721f3469965c80ca0a9d40666ccdbcc1917f3a46dbed4f6e7021c7a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
