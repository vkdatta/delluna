export const name="ribbon";
export const id="dl_ae3ce9bf4c4e45e79b5d";
export const url=new URL("../icons/ribbon.svg?v=e184f32b49a9bccd077cb5dac3979397fb7b751cd935e79fd51b0ebbf70cae3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
