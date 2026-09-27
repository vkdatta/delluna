export const name="play-pause";
export const id="dl_a3a4cc9cda0744b7968f";
export const url=new URL("../icons/play-pause.svg?v=63d95d924ad6b723d7fe26cae4761e35b34235ca59af530b24966434d281df38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
