export const name="drop-simple-bold";
export const id="dl_0d3f15e4314f4970af7d";
export const url=new URL("../icons/drop-simple-bold.svg?v=361da6f4b5d33ebdfc52619bedfd6916f6837d063b9856a4b333f4bbc27f4d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
