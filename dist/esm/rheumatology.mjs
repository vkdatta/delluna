export const name="rheumatology";
export const id="dl_7d47462660b6b9ff9fdb";
export const url=new URL("../icons/rheumatology.svg?v=346eca7b555f47dbd2271a61ef98002f288eec2cda063ea676a13fcc4de45954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
