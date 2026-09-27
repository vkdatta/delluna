export const name="lucid_1-arrow-up-right";
export const id="dl_6989f0145a8c4fbc94a9";
export const url=new URL("../icons/lucid_1-arrow-up-right.svg?v=1b0689482cb7e68ba44f4c740cdaf18c777823bc061e4b403db94265d7c4b9e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
