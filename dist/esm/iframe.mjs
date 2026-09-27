export const name="iframe";
export const id="dl_2439c94e6ff2e54d048e";
export const url=new URL("../icons/iframe.svg?v=8b48da04cd3a4b7055cc83ce8cd1edaa7dad677bbccec2ecc39c82473769b8a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
