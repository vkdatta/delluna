export const name="pause_presentation";
export const id="dl_8fe4e271c5f35ef0420c";
export const url=new URL("../icons/pause_presentation.svg?v=f5bfaa2a04191c6055379078bc1ee92bff8c063a81de8d41e7f45581bd7698a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
