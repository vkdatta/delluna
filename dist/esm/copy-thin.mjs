export const name="copy-thin";
export const id="dl_09b51f90e5914c67992b";
export const url=new URL("../icons/copy-thin.svg?v=2fff843dc4c2a43a8224ba8f79bc9e9e7aab7b1d921b5352414128e2700faa98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
