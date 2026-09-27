export const name="radical-fill";
export const id="dl_5f5110cafb524da191d1";
export const url=new URL("../icons/radical-fill.svg?v=202639b0c6168c3b5e2e6ac29aa0c6eefd175bc8c6626c789e72fc52ddf28e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
