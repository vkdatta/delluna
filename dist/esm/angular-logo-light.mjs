export const name="angular-logo-light";
export const id="dl_3aaf621eafd348c8b3b4";
export const url=new URL("../icons/angular-logo-light.svg?v=d3283c4e226cfddfd5dfbc068752cc93f62208ee5599c3793ce3e8661ba5a1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
