export const name="carrot-thin";
export const id="dl_9477fae32bf74a948515";
export const url=new URL("../icons/carrot-thin.svg?v=647c8866352b52ce501047d115b4d9ec62a56285b33f17cf93d8f7e54ac1ab14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
