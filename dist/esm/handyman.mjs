export const name="handyman";
export const id="dl_86364b98726880115224";
export const url=new URL("../icons/handyman.svg?v=207fcd374859c60c7b99f7428a3cb8a3e4013a0b36b7a4031cec37454998692e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
