export const name="text-underline-light";
export const id="dl_3ab1e542945ea2693356";
export const url=new URL("../icons/text-underline-light.svg?v=df358bad5cc42877f2179da005388955e2639c499f364f7db232aaff864b7b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
