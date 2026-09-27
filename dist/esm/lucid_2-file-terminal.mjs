export const name="lucid_2-file-terminal";
export const id="dl_26a79aae0e4148ebb08d";
export const url=new URL("../icons/lucid_2-file-terminal.svg?v=d0916099de9170a06cca1f32308293c187b7a5a351884b8d06377dc03b35f9d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
