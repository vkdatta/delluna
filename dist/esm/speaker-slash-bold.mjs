export const name="speaker-slash-bold";
export const id="dl_14a7c79316f770e04a83";
export const url=new URL("../icons/speaker-slash-bold.svg?v=e5dc83f28ecd826a4cdb1b1d81ca120be9568bfdca36735a3e122a9944246885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
