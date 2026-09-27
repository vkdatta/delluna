export const name="tip-jar-thin";
export const id="dl_70f5682af756f2527ab7";
export const url=new URL("../icons/tip-jar-thin.svg?v=a77de6d663c3980ee0d84217ca977d218b5cdda8089972c696e89420a20e7b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
