export const name="steam-logo-light";
export const id="dl_50533415c7dd44e898ce";
export const url=new URL("../icons/S/steam-logo-light.svg?v=ab6e05e9b0e1ec635306908145bcdd4f3256464d4f7290f5fa2b92f96f1670da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
