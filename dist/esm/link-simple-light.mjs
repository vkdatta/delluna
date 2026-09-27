export const name="link-simple-light";
export const id="dl_82be94ab915c457a8c13";
export const url=new URL("../icons/link-simple-light.svg?v=c0564f91784c46f5396d6a302a78c8e684ad87f97ab75325467d0e4874b1c2b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
