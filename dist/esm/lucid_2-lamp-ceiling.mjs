export const name="lucid_2-lamp-ceiling";
export const id="dl_74bcf9b73a1146d8b55b";
export const url=new URL("../icons/lucid_2-lamp-ceiling.svg?v=96ac6aaaf493500704d912bf4b334b98f33c5e17c823c88f3f3fef7eb6bd6a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
