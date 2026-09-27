export const name="spray-bottle-fill";
export const id="dl_a765059d265289fbd826";
export const url=new URL("../icons/spray-bottle-fill.svg?v=98b8fc8132e46b68a9339457c629c433abc163fd5b23eac2beddd5190f2cd388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
