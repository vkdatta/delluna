export const name="subtitles-slash-bold";
export const id="dl_f5caca79e2d14a409bcb";
export const url=new URL("../icons/S/subtitles-slash-bold.svg?v=1b794bb8c4c4bf26f5eb8d6433960962050d8fdbfa757e646d3f4853c8d9bd7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
