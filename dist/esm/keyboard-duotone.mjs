export const name="keyboard-duotone";
export const id="dl_00b8772d08424df9909d";
export const url=new URL("../icons/keyboard-duotone.svg?v=677ee3f18b63b7722ecab389f06eb2ea4dd8691cda6cf60d8bb2dabcdcde5540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
