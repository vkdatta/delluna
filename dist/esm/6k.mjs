export const name="6k";
export const id="dl_2c34f14b3f97b2793358";
export const url=new URL("../icons/6k.svg?v=37338b3af9fce4c4ee813164e23a5c2b62415eca1afa96072e7dc53fb26ebb9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
