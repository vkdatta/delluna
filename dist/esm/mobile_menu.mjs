export const name="mobile_menu";
export const id="dl_7623fad4edf9bedf5a27";
export const url=new URL("../icons/mobile_menu.svg?v=8780747d33d01cd93079f76805969576b242cf24f678315f34fb85d0fbe999c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
