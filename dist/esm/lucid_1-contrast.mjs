export const name="lucid_1-contrast";
export const id="dl_de8dd6d6492c4e19acfc";
export const url=new URL("../icons/lucid_1-contrast.svg?v=14a486436f0408703e67c6b5ac8549d3f62b882bba3f2248038c53b40949009e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
