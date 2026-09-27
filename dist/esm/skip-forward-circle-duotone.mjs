export const name="skip-forward-circle-duotone";
export const id="dl_19c5236f2a045834d19e";
export const url=new URL("../icons/skip-forward-circle-duotone.svg?v=bae597b6a97a0619841254d9da8c0e41d86294a08093bc382bcadc226171d518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
