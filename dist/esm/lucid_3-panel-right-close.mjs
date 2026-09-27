export const name="lucid_3-panel-right-close";
export const id="dl_6d5da7e59b8141a98cf6";
export const url=new URL("../icons/lucid_3-panel-right-close.svg?v=cba0c0bfedc3ae24cf3eb47e74d03a349aff9fa8a3dfd06ef83922eb484ecf86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
