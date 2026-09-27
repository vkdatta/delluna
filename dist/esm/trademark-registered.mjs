export const name="trademark-registered";
export const id="dl_873d72b2b17c6c50911b";
export const url=new URL("../icons/trademark-registered.svg?v=04e2f38b69c34eb3b3f6cb6f751675ffc79c6e1dcbe351693079f05457b3f480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
