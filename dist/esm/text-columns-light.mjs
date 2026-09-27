export const name="text-columns-light";
export const id="dl_36c103335c8f5f5b5886";
export const url=new URL("../icons/text-columns-light.svg?v=99df037afe935dd86f85dffe7114cf11d9f3a27fa29ca84d83ec20a00d222816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
