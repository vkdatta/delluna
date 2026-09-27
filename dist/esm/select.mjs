export const name="select";
export const id="dl_bc6d1613c25f1ed5cd4c";
export const url=new URL("../icons/select.svg?v=41370ec23f083f7607e94ac9b57295a922816ca033561ab362cb39f74e75fbaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
