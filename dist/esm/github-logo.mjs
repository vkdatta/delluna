export const name="github-logo";
export const id="dl_898b857751fe4506ba61";
export const url=new URL("../icons/github-logo.svg?v=40813c4885ec5c1facd1a742a6007e26b1ebb394d132a24ac6e6ab9206c98a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
