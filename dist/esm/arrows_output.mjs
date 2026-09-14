export const name="arrows_output";
export const id="dl_b876230ea1ce44aba767";
export const url=new URL("../icons/A/arrows_output.svg?v=f1a447eeb486ba6e33bf3f74a5be7a71872bbb6b396092db90ee97622b34b373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
