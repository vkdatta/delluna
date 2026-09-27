export const name="file-txt-light";
export const id="dl_20c1878074a045a581c8";
export const url=new URL("../icons/file-txt-light.svg?v=2e9669f747bceefe4b3c44a34de8bb731c879d0bb07fd064711fdf166ced9d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
