export const name="zodiac-aries";
export const id="dl_259ed9ec0ccd4c34b614";
export const url=new URL("../icons/zodiac-aries.svg?v=731b161826e259ad70be62393ed9c14be213b69a17ba3cccc2021abcfb57d8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
