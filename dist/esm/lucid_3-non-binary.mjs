export const name="lucid_3-non-binary";
export const id="dl_23350ddb45c14382b4e6";
export const url=new URL("../icons/lucid_3-non-binary.svg?v=c4d69b0d58034125ed926aebb7bb1788e0f29309872c52ae3564dc2dc2bf04ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
