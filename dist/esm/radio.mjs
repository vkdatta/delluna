export const name="radio";
export const id="dl_b6e1c5df04a24945b13f";
export const url=new URL("../icons/radio.svg?v=4c7862c3b183e1a49c361821b9d195cb8d2ef79abdc4f7d8d1972a8e2690dd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
