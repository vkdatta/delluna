export const name="music-notes-simple-fill";
export const id="dl_703d97ac5d8d457e94a9";
export const url=new URL("../icons/music-notes-simple-fill.svg?v=d25bd29e55f0078999b76542fedcf37095acdfd77f5e89f40935ec92144caa47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
