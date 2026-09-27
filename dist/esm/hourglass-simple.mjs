export const name="hourglass-simple";
export const id="dl_310e1f673af14260be87";
export const url=new URL("../icons/hourglass-simple.svg?v=9e4168a2fd7483d7fa0a284d2adcaf02d24055b85dcebfca72c54c583d578189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
