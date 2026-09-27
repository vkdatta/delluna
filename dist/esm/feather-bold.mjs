export const name="feather-bold";
export const id="dl_d83ed3e96e67448b920e";
export const url=new URL("../icons/feather-bold.svg?v=1fca47fc90a0914cb454159c1cc14d5aeca84625aa9486cf99cce74ddd22cf57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
