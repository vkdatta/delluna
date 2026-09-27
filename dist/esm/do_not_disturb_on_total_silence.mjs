export const name="do_not_disturb_on_total_silence";
export const id="dl_53d43c57f336758af361";
export const url=new URL("../icons/do_not_disturb_on_total_silence.svg?v=44cf27d5899317e33c2b068f17111675a5b1a51efbaa89deae76ca3281f24b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
