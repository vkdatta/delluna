export const name="monitor-play";
export const id="dl_004c0205f82c4c1895f9";
export const url=new URL("../icons/monitor-play.svg?v=7534556c726dfd4f291fd7fb4ab3b4a9ea6e8c7aaeec39a731dda6eecd0f6258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
