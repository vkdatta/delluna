export const name="lucid_1-arrow-up-wide-narrow";
export const id="dl_5860cefb1b1243c6b761";
export const url=new URL("../icons/lucid_1-arrow-up-wide-narrow.svg?v=7740108f6ac19d6da159f8144c99c7d3a51b7b78e65cfba0adb89fd8167fe5c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
