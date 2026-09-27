export const name="hand-thin";
export const id="dl_83ec0a2555ac4164a001";
export const url=new URL("../icons/hand-thin.svg?v=b7a8224eb8f841bad9a22c65287dd22e9a5d78d8d4f0b51fc8711409b905e129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
