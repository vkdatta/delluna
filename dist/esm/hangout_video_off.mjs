export const name="hangout_video_off";
export const id="dl_60c35ceff432cec61a53";
export const url=new URL("../icons/hangout_video_off.svg?v=ad6e9e023d3337abf7190d31d4ca309b62eba939c5cde4be8b30df334fa92165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
