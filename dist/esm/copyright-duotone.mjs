export const name="copyright-duotone";
export const id="dl_7f65133d0b144f298f08";
export const url=new URL("../icons/copyright-duotone.svg?v=1419020091175a22ee6b9cb6eee3a54863211a637522ad9a9dbfbf823335da7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
