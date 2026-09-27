export const name="exposure";
export const id="dl_0a034da5240a947136f5";
export const url=new URL("../icons/exposure.svg?v=55f1789eb4b043738effc5e09c72ba1fea1d8b38ccb244354c30548bd06ed557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
