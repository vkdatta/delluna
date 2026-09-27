export const name="dotted";
export const id="dl_ca899a68e9ff4818a432";
export const url=new URL("../icons/dotted.svg?v=914ea4a3ec36fe22a9919a29c3eccb4e72c6f21f761a7a79f023cee0fcfae237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
