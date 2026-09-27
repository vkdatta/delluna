export const name="file-c-thin";
export const id="dl_bb92bc4e98ae4b2d94fb";
export const url=new URL("../icons/file-c-thin.svg?v=0f06a30ca89f1d937ba397c9eaf4f2216808768aa7f62d15f479607704716f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
