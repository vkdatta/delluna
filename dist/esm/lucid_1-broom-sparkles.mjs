export const name="lucid_1-broom-sparkles";
export const id="dl_7791b3ca8a27444480e7";
export const url=new URL("../icons/lucid_1-broom-sparkles.svg?v=4c4b545350a0dabb8350e1a667567b6294a34f72f31221ca59c6363a520403d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
