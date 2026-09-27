export const name="google-drive-logo-duotone";
export const id="dl_4cccd58034da468e9f53";
export const url=new URL("../icons/google-drive-logo-duotone.svg?v=c3ce294e4cf344deea095e49027bd5e003bd4c64201fdb108ae7470189e38956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
