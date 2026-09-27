export const name="lucid_1-circle-arrow-left";
export const id="dl_00143c3919804586b1a4";
export const url=new URL("../icons/lucid_1-circle-arrow-left.svg?v=726df069eb7ba9bfba2f6a404b850a6e1a86b9d942086cf2215bb11cc41aaba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
