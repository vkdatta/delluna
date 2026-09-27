export const name="keyboard_previous_language";
export const id="dl_f6a0af7e97e6ae08dafb";
export const url=new URL("../icons/keyboard_previous_language.svg?v=7f55e1d71e408235ac5a1d69889dfae3666cec34198614bd31659b6df6f86532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
