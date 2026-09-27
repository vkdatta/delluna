export const name="file-js-bold";
export const id="dl_6e8c254acdfc4245aafd";
export const url=new URL("../icons/file-js-bold.svg?v=5463bd065e3d4fc5dd69deb8aa48019852382a99ba50e74ab395818595fdc9bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
