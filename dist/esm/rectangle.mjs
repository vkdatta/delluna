export const name="rectangle";
export const id="dl_a2e6d4c907244895b43f";
export const url=new URL("../icons/rectangle.svg?v=e130815da431ddeb96e3c5dd9c754deaa065bd7006d3ce613d5b7e92f252579c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
