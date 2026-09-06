export const name="hand-waving-bold";
export const id="dl_679564edfabd42b69c6d";
export const url=new URL("../icons/hand-waving-bold.svg?v=564055bcb0774568537d2acc51486373fad9e07d58ef7f09365354359011df04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
