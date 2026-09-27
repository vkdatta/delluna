export const name="text-h-two-bold";
export const id="dl_86dfea74e704ff3c64fa";
export const url=new URL("../icons/text-h-two-bold.svg?v=24f9abe2e55406378aaba3eb8b8f9c87aa018da6a784811e3bd49e1564ff3141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
