export const name="web-fill";
export const id="dl_0e0840e30183b9384882";
export const url=new URL("../icons/web-fill.svg?v=37ec1c36cf6632879a9de878c84272f10adad92cb6aff07daf51336f28d41057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
