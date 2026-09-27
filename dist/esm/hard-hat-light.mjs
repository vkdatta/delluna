export const name="hard-hat-light";
export const id="dl_f4d17bc7035e4a1f80a8";
export const url=new URL("../icons/hard-hat-light.svg?v=e46ebf7c542aa8605d20de8b3736dd31b69dc8ef4c796b43fe48d390b6762846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
