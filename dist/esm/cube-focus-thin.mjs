export const name="cube-focus-thin";
export const id="dl_de39a21d7d254ed7bce0";
export const url=new URL("../icons/cube-focus-thin.svg?v=e7a6a391a1182157295b009b718fee2a3a6be395c0a3b5fe7f67e4bd456c7f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
