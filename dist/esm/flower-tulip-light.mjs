export const name="flower-tulip-light";
export const id="dl_6b6838fc1cdd4c8da851";
export const url=new URL("../icons/flower-tulip-light.svg?v=66f40221e04257dc131307d3e06cea8f06d59f5bf693568ea6fbde26a19062d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
