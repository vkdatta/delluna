export const name="arrow-fat-lines-down";
export const id="dl_aa687f43b3fc42838e77";
export const url=new URL("../icons/arrow-fat-lines-down.svg?v=81a010c23a93b5e07cf2bb5c8a30a2339789eaabf6a23af35c4d8a041d2eddff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
