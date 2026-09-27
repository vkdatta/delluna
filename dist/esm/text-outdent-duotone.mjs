export const name="text-outdent-duotone";
export const id="dl_f5cee4521640dede9564";
export const url=new URL("../icons/text-outdent-duotone.svg?v=8f8466fb8898afc9ac284b470582dd49e5070a44c5460d9e9260250ab5053655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
