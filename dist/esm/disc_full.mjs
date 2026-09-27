export const name="disc_full";
export const id="dl_9c98b5eaaf34600fe5a1";
export const url=new URL("../icons/disc_full.svg?v=89f3d5001f61bd6c73af7bee5ff0085af5105df73230d888c38369547d7833eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
