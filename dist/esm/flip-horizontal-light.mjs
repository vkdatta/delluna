export const name="flip-horizontal-light";
export const id="dl_354841ecb28347839717";
export const url=new URL("../icons/flip-horizontal-light.svg?v=8c5db0a63cae18df4ce6afc05df470b03df813c4ddc2e1bf50fd15906409a8a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
