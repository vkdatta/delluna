export const name="diamonds-four-fill";
export const id="dl_140365f6f7c54c4b9df3";
export const url=new URL("../icons/diamonds-four-fill.svg?v=dd4cccf17c16b56c09fef8bf9d56f34d0f4b82b1f89d5971ace78d6e308622cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
