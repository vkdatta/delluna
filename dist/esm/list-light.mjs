export const name="list-light";
export const id="dl_7d91f5bc7e2d4bbcb256";
export const url=new URL("../icons/list-light.svg?v=84d41afafdde9d330958761f1ea5c9fc1a6d0bfefbecf971d17ffac99dec73cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
