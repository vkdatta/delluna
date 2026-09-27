export const name="science_off";
export const id="dl_fc3c0b818ecb01733b06";
export const url=new URL("../icons/science_off.svg?v=b4740d9c15ee085322be6080ec90b90f5181f99a1e733a9e5d7e9cec420b368f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
