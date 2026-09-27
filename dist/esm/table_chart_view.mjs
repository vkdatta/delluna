export const name="table_chart_view";
export const id="dl_7d50c108886a117065ee";
export const url=new URL("../icons/table_chart_view.svg?v=98ef02bf0554bc4ede3cd84066408af162dfb944c985a8bf63e32c9938d12709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
