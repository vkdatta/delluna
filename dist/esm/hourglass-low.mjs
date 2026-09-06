export const name="hourglass-low";
export const id="dl_0f9e9731cbc743f6a037";
export const url=new URL("../icons/hourglass-low.svg?v=e515ef9a0078f63fa75999f971b8e7e77cae8d2a4b032633ff6f1e1d62160a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
