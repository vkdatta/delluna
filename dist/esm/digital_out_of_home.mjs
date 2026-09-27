export const name="digital_out_of_home";
export const id="dl_c4c0fc2c4ff0a4101b13";
export const url=new URL("../icons/digital_out_of_home.svg?v=9c4bf6a2ebc32e32f4544cf59a6ab28a9cc03e47ecdfef35c9733579c522052e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
