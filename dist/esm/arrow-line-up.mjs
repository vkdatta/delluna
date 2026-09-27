export const name="arrow-line-up";
export const id="dl_76e2f41837584e38b24e";
export const url=new URL("../icons/arrow-line-up.svg?v=15f4dc54e3aef0ebbb98c0be21e72e2d55a413683b6ad127481a05d799786ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
