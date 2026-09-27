export const name="images-square-light";
export const id="dl_8eea943fb0eb4bee8ae9";
export const url=new URL("../icons/images-square-light.svg?v=907ac7606638eddabea2e0d9eac684d5d560a99679b22836fca58c315d34c7b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
