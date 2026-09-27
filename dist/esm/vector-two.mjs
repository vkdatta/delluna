export const name="vector-two";
export const id="dl_6b5f682ec2b01a9bff05";
export const url=new URL("../icons/vector-two.svg?v=0f1737e4b263dac25f5d274fc2ba19710c45f3d59ceb6f9d535eeb46ebb5d5c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
