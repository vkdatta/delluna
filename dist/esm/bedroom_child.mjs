export const name="bedroom_child";
export const id="dl_c2ad478d3f664a42b899";
export const url=new URL("../icons/bedroom_child.svg?v=2bf35c4069ea577ce8845d72eb464baf13ea96ca12b5614a6e8b6fe08143e752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
