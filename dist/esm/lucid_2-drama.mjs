export const name="lucid_2-drama";
export const id="dl_7f1c98dda42b4eeb837c";
export const url=new URL("../icons/lucid_2-drama.svg?v=20b14e588f5bcc394b12890d8546556488a08e9553798c65b88df8a89b290a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
