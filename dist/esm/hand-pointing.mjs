export const name="hand-pointing";
export const id="dl_7f96f4ecb95c4818bb64";
export const url=new URL("../icons/hand-pointing.svg?v=bb936dc20b91d795f434c2e3cbbbe5f62db0042c98e8ad151a32b28bdd66caae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
