export const name="background_dot_small";
export const id="dl_5dc386b574bcfd965a94";
export const url=new URL("../icons/background_dot_small.svg?v=d4a8256eff5778c4bfc43570c9190ab577432b9e36da4795eebd295694e5b3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
