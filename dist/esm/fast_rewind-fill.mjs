export const name="fast_rewind-fill";
export const id="dl_636f988e95937298ce5d";
export const url=new URL("../icons/fast_rewind-fill.svg?v=93daf44dd57bfe3c333d5da278e6a84f366d918df924b087466fa981d197e564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
