export const name="clock-countdown-light";
export const id="dl_5f75231314084fc28139";
export const url=new URL("../icons/clock-countdown-light.svg?v=2ee6df57ef2f6ad564fab8ebc92e89f8665efde0d43b1f5acec6f3f0d039e103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
