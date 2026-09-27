export const name="arrow-fat-lines-left-thin";
export const id="dl_1bdf3b5e79bf40449499";
export const url=new URL("../icons/arrow-fat-lines-left-thin.svg?v=b39e41315ac5c273951e28c40f0718d9c41eb6e81c7ed0f6526aead953db53c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
