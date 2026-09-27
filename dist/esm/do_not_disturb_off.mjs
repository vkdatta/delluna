export const name="do_not_disturb_off";
export const id="dl_508647222b89216f776c";
export const url=new URL("../icons/do_not_disturb_off.svg?v=787de81157cd639da31d123a0a326f89fb84bbf96c06420c21e33c6c517a3097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
