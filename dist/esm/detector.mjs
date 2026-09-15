export const name="detector";
export const id="dl_98c1137845a74f53afb6";
export const url=new URL("../icons/D/detector.svg?v=bc5fd6e0b8e0a574e1a56939f6974abbec930cf17238f1b1d37067067a8a8109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
