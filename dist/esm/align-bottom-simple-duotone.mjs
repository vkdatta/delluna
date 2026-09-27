export const name="align-bottom-simple-duotone";
export const id="dl_7fd1fb5c28f341db828e";
export const url=new URL("../icons/align-bottom-simple-duotone.svg?v=a655cc58547d5b45e3784c1efd736d8ce098b2bb59cba7d6bee8b06817658d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
