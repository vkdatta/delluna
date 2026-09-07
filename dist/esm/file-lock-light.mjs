export const name="file-lock-light";
export const id="dl_18ce6bd0311d43709692";
export const url=new URL("../icons/file-lock-light.svg?v=b1ce5d2c4997d6e751306d79cb910914a8cfebb048089f305396d477575953ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
