export const name="zodiac-aries";
export const id="dl_259ed9ec0ccd4c34b614";
export const url=new URL("../icons/zodiac-aries.svg?v=1307698ed9bf3697e23049eb9a181e87ff74179139cdff600aa3c5ba8bb18d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
