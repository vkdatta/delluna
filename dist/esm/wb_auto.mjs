export const name="wb_auto";
export const id="dl_9bb3e46fcf87491c8cca";
export const url=new URL("../icons/wb_auto.svg?v=a4dea699ada56940ea8acb3378a9aaf1d214e14e888053c62594bce2ff3d694e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
