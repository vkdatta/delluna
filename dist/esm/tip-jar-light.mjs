export const name="tip-jar-light";
export const id="dl_7b5ea69bf83f49fd9279";
export const url=new URL("../icons/T/tip-jar-light.svg?v=1d0f170b827ee8eb9c493a2c8aac601fe90fbab15e2bc64e3a44df60c11d870b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
