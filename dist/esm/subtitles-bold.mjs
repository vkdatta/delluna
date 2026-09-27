export const name="subtitles-bold";
export const id="dl_1b166fcf924643a9cd14";
export const url=new URL("../icons/subtitles-bold.svg?v=549e7515475f34802013d11e7bdce8a1d8f056d7b73b05192d8379a8ab10bcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
