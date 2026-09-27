export const name="speed_1_7x";
export const id="dl_210db135754cfacb9510";
export const url=new URL("../icons/speed_1_7x.svg?v=a72e22c4f42ebecd9283fdd55038bc28334bb2740fd165f313f19f69ce3712c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
