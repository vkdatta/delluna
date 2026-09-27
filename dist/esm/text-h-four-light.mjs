export const name="text-h-four-light";
export const id="dl_2ce857fad77cf45dd9e1";
export const url=new URL("../icons/text-h-four-light.svg?v=288c25651c1e03b5ff63df39f09824d4d346357bd2dc404b4c19afa1daf160a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
