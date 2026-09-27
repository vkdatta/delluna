export const name="tsv";
export const id="dl_6f9a68c9bba845e564aa";
export const url=new URL("../icons/tsv.svg?v=be6d661d67ed396c827f333f5184fcb82a6b91f5e37c0473359fc6cdd9cdcbaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
