export const name="arrow-elbow-down-right-bold";
export const id="dl_4a2235ef9c594465a38f";
export const url=new URL("../icons/arrow-elbow-down-right-bold.svg?v=023156e6c217c861ac5319f10cf3ee1a0b56ec29d6ebf2ceb79c92c0c311a15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
