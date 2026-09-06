export const name="files";
export const id="dl_2283eff751484c7e891a";
export const url=new URL("../icons/files.svg?v=bb4cec5fc4ae78d9bfc38378db6d991a4f9b89e0e58db97a95a083b68a4c5a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
