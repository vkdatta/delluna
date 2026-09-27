export const name="rectangle";
export const id="dl_a2e6d4c907244895b43f";
export const url=new URL("../icons/rectangle.svg?v=a34a7b31aad89940dffd4acf2a546725def9b5cd1acb453a430c402148484ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
