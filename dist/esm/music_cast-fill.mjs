export const name="music_cast-fill";
export const id="dl_a57a720ab46bec05ef71";
export const url=new URL("../icons/music_cast-fill.svg?v=ca4bb6bbf8f6c63f50f4efc088efeb886d0b4124079724a00e04cd0e96440555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
