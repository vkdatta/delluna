export const name="record-fill";
export const id="dl_2a8146090d7b4c0988e7";
export const url=new URL("../icons/record-fill.svg?v=bb802e4c226ceb80f0e563f66cd486dea2c6eecb3a82c4c86254897035f52e55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
