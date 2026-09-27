export const name="airwave-fill";
export const id="dl_b33de4eb7bf899967e88";
export const url=new URL("../icons/airwave-fill.svg?v=8d094fffcb76e563ba102a32d549297a5c3ff689764665c3d7717e7c6082c6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
