export const name="soundcloud-logo";
export const id="dl_dde51fc19ab34ee79e4d";
export const url=new URL("../icons/S/soundcloud-logo.svg?v=78c6a9f4c8fe2bbb832513c71eaddd0d6b064b8d1d19e579b8fd8bf7f0bfeb86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
