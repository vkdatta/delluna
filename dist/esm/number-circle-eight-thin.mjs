export const name="number-circle-eight-thin";
export const id="dl_8eda5b9713de4bc8a782";
export const url=new URL("../icons/number-circle-eight-thin.svg?v=2e9d339a2e1914192a189200775745a580df2aa6e60209bc24a8e3f9e7c198cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
