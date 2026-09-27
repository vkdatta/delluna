export const name="keyboard_return-fill";
export const id="dl_06929c67ce2741162926";
export const url=new URL("../icons/keyboard_return-fill.svg?v=f3bc73a5a8408cb7678eaedda51b0dc320920d09bdf9325a2fa51107727f0a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
