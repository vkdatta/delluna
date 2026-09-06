export const name="file-rs-thin";
export const id="dl_df8674f107de44eb922c";
export const url=new URL("../icons/file-rs-thin.svg?v=ac07ceaab570913269a9211ad7eac93f12b9448feae8e898a8ec55552f3fa5d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
