export const name="play_pause-fill";
export const id="dl_44ef3ce5db9fe6c418f3";
export const url=new URL("../icons/play_pause-fill.svg?v=7308003125d48b77678f53ee695e01c2eea9b8c867236017bd2b0c5b6953026b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
