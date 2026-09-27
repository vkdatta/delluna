export const name="cinematic_blur-fill";
export const id="dl_efb99bd8aca96874b783";
export const url=new URL("../icons/cinematic_blur-fill.svg?v=5574f27b8b239a7063ce0aac1b20cc5f36085e3f8747057e02783b592755637e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
