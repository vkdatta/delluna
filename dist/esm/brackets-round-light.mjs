export const name="brackets-round-light";
export const id="dl_b27f1d56d6324e8ab335";
export const url=new URL("../icons/brackets-round-light.svg?v=7833025cfcf4dcb149d47eeb40d8639d68db3bb446660012728474da6514f0b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
