export const name="arrow-fat-lines-left-light";
export const id="dl_91e85ace376842f896c6";
export const url=new URL("../icons/arrow-fat-lines-left-light.svg?v=92b6d9c36ed2901f4c078a57c9b100dea66b7ee5dfc3edc326627bf40b3209f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
