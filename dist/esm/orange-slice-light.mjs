export const name="orange-slice-light";
export const id="dl_be980facbfe34aea838b";
export const url=new URL("../icons/orange-slice-light.svg?v=5bb5f8095baa7e8aa2fdc428ce299bf7eff011a25961fecdfd55f5ed1bae2d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
