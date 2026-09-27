export const name="file-thin";
export const id="dl_70fe5d294c274d9a8ce4";
export const url=new URL("../icons/file-thin.svg?v=2ff858522a292150b53ba8ff0c80680445b4bda1549d423fd804d4f6b0e9ea71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
