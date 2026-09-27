export const name="emoji_transportation";
export const id="dl_b5a1b723bfee8dccbf9e";
export const url=new URL("../icons/emoji_transportation.svg?v=6aa2514f9353d952b22c973137e0805c88ca4f2bf181adcf50b7242ed004957d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
