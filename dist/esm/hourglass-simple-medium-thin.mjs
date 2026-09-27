export const name="hourglass-simple-medium-thin";
export const id="dl_a7c0510b802541f59adc";
export const url=new URL("../icons/hourglass-simple-medium-thin.svg?v=4a186dc699a83647c336b5f06c29735af2053fcf14ef35350eacd06130c51d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
