export const name="sports_mma";
export const id="dl_1402b349fc328b711367";
export const url=new URL("../icons/sports_mma.svg?v=11ea8fc91f12ed9a8bbcd0b124cc54bca001f6caff74dfb740e1aba258917b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
