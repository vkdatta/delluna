export const name="list_arrow-fill";
export const id="dl_6aff72e20abd4738b1c7";
export const url=new URL("../icons/list_arrow-fill.svg?v=065ba2c4400098d9b41013322d6826709de1fa35c42c512c9c7020aaee3a9daa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
