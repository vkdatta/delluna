export const name="arrow-elbow-up-left-duotone";
export const id="dl_35df16d18cf74764ac1a";
export const url=new URL("../icons/arrow-elbow-up-left-duotone.svg?v=9ebbc9f9662afcde0ed4dd31a317bde0211a0c9d7dc5c9ebeb2b5a414f5a5fd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
