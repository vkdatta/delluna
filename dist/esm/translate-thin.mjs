export const name="translate-thin";
export const id="dl_7a6f9834eee4485e9fb7";
export const url=new URL("../icons/T/translate-thin.svg?v=1eee0d6066a94e1fc7a124dbb0c97e2f387226670feb52864ffa282a9c200c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
