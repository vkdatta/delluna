export const name="square-percent";
export const id="dl_cb070652859643c7b00b";
export const url=new URL("../icons/square-percent.svg?v=27cc042d80fef936700c6dcad9f59498764941afeed3d86ffead5ab9b205250d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
