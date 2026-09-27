export const name="angular-logo-duotone";
export const id="dl_5a96c6a5557740dd900c";
export const url=new URL("../icons/angular-logo-duotone.svg?v=c450710352c730c43aabd8e8c3b5171302cb1e81a0ef40139bf2c524aff69fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
