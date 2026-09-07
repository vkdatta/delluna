export const name="toggle-left-fill";
export const id="dl_3241f190edc949d1b1c5";
export const url=new URL("../icons/T/toggle-left-fill.svg?v=31cc19f45aba08b5db29e03c3fe55ecf4ef751568b5ef98274bce14dca24b5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
