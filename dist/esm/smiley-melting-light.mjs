export const name="smiley-melting-light";
export const id="dl_e737da760bbb4645be8e";
export const url=new URL("../icons/S/smiley-melting-light.svg?v=c99a8d78d30c871f9ea73ab7746a6f8153187e9689cd14cf4060ac6e397b25b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
