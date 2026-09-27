export const name="sticky-note-plus";
export const id="dl_310c75e70665425088c7";
export const url=new URL("../icons/sticky-note-plus.svg?v=caf1fa11be926533de2658aa4652a596677b1a76475a1a949b0b030dc9523166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
