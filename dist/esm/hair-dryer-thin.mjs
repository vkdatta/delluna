export const name="hair-dryer-thin";
export const id="dl_e49e54b12bf642a0b30d";
export const url=new URL("../icons/hair-dryer-thin.svg?v=b051c6defff8023419a3efd1ba139e9e099b64ef946c93cf7b6c07943b35ce6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
