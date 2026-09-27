export const name="caret-circle-double-right-thin";
export const id="dl_cd6a0a417596447891f8";
export const url=new URL("../icons/caret-circle-double-right-thin.svg?v=4ad9ceffe5c81f31245b3406a32519471049835233c59e2904a18a5dd847a74f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
