export const name="lucid_3-sparkles";
export const id="dl_abc618183c8f4215b097";
export const url=new URL("../icons/lucid_3-sparkles.svg?v=986e36db89e5bbb55667d0689bfd15dd25e074f2ae697786f9b567b3d2365dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
