export const name="arrow-fat-lines-up-thin";
export const id="dl_442c71a6c76b480a8947";
export const url=new URL("../icons/arrow-fat-lines-up-thin.svg?v=aae947c79a1a1321fb94600b2df9f9b20db045637f5ecbedff5bf245a6e600cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
