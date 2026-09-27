export const name="mobile_text-fill";
export const id="dl_8b7aeb152fec44140bc1";
export const url=new URL("../icons/mobile_text-fill.svg?v=2791d395bca31fdbd57fd8d4fa2e0c8077bde9398359d49492289908aa6c5970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
