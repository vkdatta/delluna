export const name="history_edu";
export const id="dl_5e596cc66442fa5c9bb2";
export const url=new URL("../icons/history_edu.svg?v=f218bab6cfdc7f83525273a50459d92af6122100b067ba3b988a3d96c23c76f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
