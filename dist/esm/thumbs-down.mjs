export const name="thumbs-down";
export const id="dl_3da75e7629fc4d62bd1c";
export const url=new URL("../icons/thumbs-down.svg?v=e3f7495d52540b72536fc54b3ac44c50fe4040d8faa6c68122da56e694d0d8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
