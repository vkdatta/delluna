export const name="intersection-thin";
export const id="dl_0628287b3b074209a441";
export const url=new URL("../icons/intersection-thin.svg?v=33cc72e49fa4172503e48454a2361a2bfdd4f2c5f6147fbe408008ccf963dafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
