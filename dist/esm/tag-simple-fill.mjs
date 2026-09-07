export const name="tag-simple-fill";
export const id="dl_78b6c0d70ea44881b5b4";
export const url=new URL("../icons/T/tag-simple-fill.svg?v=425907298940a05c2ef9368f54bc7e4c2623b98ac9208970f690a99c10ceee0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
