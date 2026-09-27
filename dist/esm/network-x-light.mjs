export const name="network-x-light";
export const id="dl_4a70caf25978447e8b84";
export const url=new URL("../icons/network-x-light.svg?v=4d6e44192b89244dfa8316c18a5844037ddfd44ab8a528db6065100f9940c35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
